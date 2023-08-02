// Check the Documentation and Manual Here: https://webgi.xyz/docs

setupCoreWebGiViewer({ canvas: document.getElementById("mcanvas") }, {}).then(
    (viewer) => {
      const model =
        "https://demo-assets.pixotronics.com/pixo/gltf/earringScene2.glb";
      viewer.getManager().addFromPath(model);
      console.log(viewer);
    }
  );
  