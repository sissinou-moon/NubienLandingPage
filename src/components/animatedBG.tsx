"use client";
import { useEffect, useRef } from "react";

export default function ElectricNoiseBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const gl = canvas.getContext("webgl");
        if (!gl) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Vertex shader
        const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        // Fragment shader (Electric Noise adapted to one-pass WebGL)
        const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;

      #define time iTime*0.15
      #define tau 6.2831853

      mat2 makem2(in float theta){float c = cos(theta);float s = sin(theta);return mat2(c,-s,s,c);}
      float hash(vec2 p){return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453);}
      float noise(in vec2 x){
        vec2 i = floor(x);
        vec2 f = fract(x);
        float a = hash(i);
        float b = hash(i+vec2(1.,0.));
        float c = hash(i+vec2(0.,1.));
        float d = hash(i+vec2(1.,1.));
        vec2 u = f*f*(3.-2.*f);
        return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
      }

      float fbm(in vec2 p){	
        float z=2.;
        float rz = 0.;
        for (float i=1.; i<6.; i++){
          rz += abs((noise(p)-0.5)*2.)/z;
          z *= 2.;
          p *= 2.;
        }
        return rz;
      }

      float dualfbm(in vec2 p){
        vec2 p2 = p*.7;
        vec2 basis = vec2(fbm(p2-time*1.6), fbm(p2+time*1.7));
        basis = (basis-.5)*.9;
        p += basis;
        return fbm(p*makem2(time*0.2));
      }

      float circ(vec2 p) {
        float r = length(p);
        r = log(sqrt(r));
        return abs(mod(r*4.,tau)-3.14)*9.+.7;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord){
        vec2 p = fragCoord.xy / iResolution.xy - 0.;
        p.x *= iResolution.x / iResolution.y;
        p *= 8.;
        
        float rz = dualfbm(p);

        p /= exp(mod(time*3.,3.14159));
        rz *= pow(abs((0.1-circ(p))),.9);

        vec3 col = vec3(.2,0.1,0.4)/rz;
        col = pow(abs(col),vec3(.99));
        fragColor = vec4(col,1.);
      }

      void main(){
        vec4 color;
        mainImage(color, gl_FragCoord.xy);
        gl_FragColor = color;
      }
    `;

        function compileShader(src: string, type: number) {
            const shader = gl.createShader(type)!;
            gl.shaderSource(shader, src);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader));
            }
            return shader;
        }

        const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

        const program = gl.createProgram()!;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const positionLocation = gl.getAttribLocation(program, "position");
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                -1, -1,
                1, -1,
                -1,  1,
                -1,  1,
                1, -1,
                1,  1,
            ]),
            gl.STATIC_DRAW
        );
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const iResolution = gl.getUniformLocation(program, "iResolution");
        const iTime = gl.getUniformLocation(program, "iTime");

        const startTime = Date.now();

        function render() {
            const currentTime = (Date.now() - startTime) / 1000.0;
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(iResolution, canvas.width, canvas.height);
            gl.uniform1f(iTime, currentTime);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(render);
        }

        render();

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
        />
    );
}
