import {
  ViewerApp,
  AssetManagerPlugin,
  CameraViewPlugin,
  CameraView,
  addBasePlugins,
  Vector3
} from "https://dist.pixotronics.com/webgi/runtime/bundle-0.6.9.mjs";

// Check the Documentation and Manual Here: https://webgi.xyz/docs

async function setupViewer() {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: document.getElementById("mcanvas"),
    useRgbm: true
  });

  // Add some plugins
  const manager = await viewer.addPlugin(AssetManagerPlugin);

  await addBasePlugins(viewer);
  const camViews = viewer.getPlugin(CameraViewPlugin);

  viewer.renderer.refreshPipeline();

  await viewer.scene.setEnvironment(
    await manager.importer.importSinglePath(
      "https://dist.pixotronics.com/webgi/assets/hdr/gem_2.hdr.png?v=1"
    )
  );

  await manager.addFromPath(
    "https://dist.pixotronics.com/webgi/assets/gltf/cube_diamond_sample.gltf"
  );

  // Control Options
  const controls = viewer.scene.activeCamera.controls;
  controls.minDistance = 5;
  controls.maxDistance = 15;
}

setupViewer();