import * as SPLAT from "gsplat";

const scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const renderer = new SPLAT.WebGLRenderer();
const controls = new SPLAT.OrbitControls(camera, renderer.canvas);

async function main() {
    // 使用相对于部署基础路径的 URL
    const url = new URL("bonsai-7k.splat", import.meta.url).href;

    await SPLAT.Loader.LoadAsync(url, scene, () => {});

    const frame = () => {
        controls.update();
        renderer.render(scene, camera);

        requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
}

main();