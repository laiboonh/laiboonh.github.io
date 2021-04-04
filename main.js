import init, { run_app } from './pkg/laiboonh.js';
async function main() {
   await init('/pkg/laiboonh_bg.wasm');
   run_app();
}
main()