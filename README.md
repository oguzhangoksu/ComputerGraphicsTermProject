# Computer Graphics TermProject

1. **INTRODUCTION TO WEBGL**

WebGL, short for Web Graphics Library, is a JavaScript API that empowers web developers to create immersive and high-performance 3D and 2D graphics directly within compatible web browsers. Developed by the Khronos Group, WebGL builds upon the OpenGL ES 2.0 standard, offering a cross-platform solution for rendering graphics without the need for plugins. Leveraging the HTML5 &lt;canvas&gt; element, WebGL allows developers to seamlessly integrate visually compelling content into web pages. At its core, WebGL relies on shader programming using GLSL, enabling precise control over the rendering pipeline for both vertices and fragments. By tapping into the power of the GPU, WebGL delivers accelerated graphics rendering, making it suitable for a wide array of applications, including games, simulations, data visualization, and virtual reality experiences. The ecosystem around WebGL is enriched by libraries like Three.js and Babylon.js, simplifying development and expanding its capabilities. With its secure sandbox environment and broad browser support, WebGL stands as a key technology in enabling sophisticated graphics experiences on the web.

- 1.1 **WEBGL TECHNOLOGY**

WebGL technology represents a groundbreaking advancement in web-based graphics, providing a powerful framework for rendering 3D and 2D graphics directly in web browsers. Developed by the Khronos Group, WebGL builds on the OpenGL ES 2.0 standard, bringing hardware-accelerated graphics capabilities to the web without the need for external plugins. This technology is seamlessly integrated into HTML5 through the use of the &lt;canvas&gt; element, offering a versatile platform for developers to create visually engaging and interactive content. At its core, WebGL relies on the use of shader programs written in GLSL, enabling fine-grained control over the graphics rendering process. By harnessing the computational power of the GPU, WebGL ensures optimal performance, making it well-suited for applications ranging from dynamic visualizations and simulations to sophisticated online games. Its cross-browser compatibility, security features, and support for libraries like Three.js make WebGL a key enabler for pushing the boundaries of graphical experiences on the web, opening up new possibilities for immersive and engaging web applications.

2. **PROJECT DESCRIPTION**

\-Physical objects will be represented by geometric structures in a 3D environment.

\-These represented objects will be covered with texture suitable for them.

\-By using affine transformations, objects in the environment can be subjected to operations such as rotation, translation, scaling.

\-Light effects will be displayed by using light sources and adjusting their intensities, and at least one interactive animation

**Key Usage:**

**Arrow Keys (Up, Down, Left, Right):**

\-Up and Down arrow keys (ArrowUp and ArrowDown) translate the camera along its local Y-axis, moving it up or down.

\-Left and Right arrow keys (ArrowLeft and ArrowRight) translate the camera along its local X-axis, moving it left or right.

**W, A, S, D Keys:**

\-W and S keys (w and s) translate the camera along its local Z-axis, moving it forward or backward.

\-A and D keys (a and d) rotate the camera around its local Y-axis, simulating a strafing movement.

**Q and E Keys:**

\-Q and E keys (q and e) rotate the camera around its local Z-axis, providing a roll effect.

**Z and X Keys:**

\-Z and X keys (z and x) rotate the camera around its local X-axis, giving a pitch effect.

**R Key:**

\-The R key (r) resets the camera to its initial position and orientation.

3. **ARCHITECTURE**

Main Initialization Function: DOMContentLoaded

- This function is triggered when the DOM content has been fully loaded. It serves as the main entry point for setting up the 3D scene.
- Calls functions to create the camera, draw various objects (cube, ball, bucket, walls, floor), set up lighting, handle key events, and initiate the animation loop.

Camera Setup Function: createCamera

- Initializes a perspective camera with specific parameters (field of view, aspect ratio, near and far planes) and sets its initial position and orientation.
- Sets up the rendering statistics display using Stats.js.
- Creates a WebGL renderer and appends it to the HTML container.

Key Event Handling Function: keyDown

- Adds an event listener for keydown events.
- Translates and rotates the camera based on specific key inputs.
- Logs the camera position to the console for real-time feedback.
- Provides interactive control for camera movement and rotation.

Object Drawing Functions: drawCube, drawBall, bucket, drawWall, drawFloor

- These functions are responsible for drawing various objects in the 3D scene.
- Utilize the Three.js library to create geometries, apply textures, and set positions for cubes, balls, buckets, walls, and floors.

Texture Loading Functions: (used in drawing functions)

- Functions such as drawCube, drawBall, bucket, drawWall, and drawFloor use the ImageBitmapLoader to load textures asynchronously.
- Apply the loaded textures to materials, enhancing the visual appearance of objects.

Lighting Setup Functions: ambientLight, directionalLight

- ambientLight: Creates an ambient light source with adjustable intensity. Updates the light intensity dynamically based on user input.
- directionalLight: Creates a directional light source with adjustable intensity and position along the X, Y, and Z axes. Also updates dynamically based on user input.

Animation Function: animate

- Initiates the animation loop using requestAnimationFrame.
- Invokes the render method to continuously update and display the 3D scene.
- Integrates the Stats.js library for performance monitoring.

Event Listeners for Lighting Controls

- Inside ambientLight and directionalLight, event listeners are set up for UI controls (checkboxes and range inputs) to adjust the intensity and position of lights dynamically.

**4.TO BE ABLE TO WORK, YOU NEED TO**

**1-** You need to download Node.js. (This project was run with v18.16.1.)

**2-** During the Node.js installation process, you need to download the npm package manager.

**3-** While in the project directory, apply the following commands sequentially:

- npm install --save three
- npm install --save-dev vite
- npx vite

**4-** Open the generated address in a browser (preferably Chrome).

**5.SCREEN SNAPSHOTS**
  ## **Ambient 0.5!**
![Resim5](https://github.com/oguzhangoksu/ComputerGraphicsTermProject/assets/70150316/faf6b3a7-70e9-4c91-bd1d-935189379b5e)##
  ## **Ambient 1**
![Resim4](https://github.com/oguzhangoksu/ComputerGraphicsTermProject/assets/70150316/52ba2237-b444-4665-8b7d-bc1d791c1392)##
  ## **Ambient Light=0**
  ![Resim3](https://github.com/oguzhangoksu/ComputerGraphicsTermProject/assets/70150316/109f34de-509f-40e2-8661-b49bfdfe7afb)##
  ## **Directional Light =1** and **Z position =28**
  ![Resim2](https://github.com/oguzhangoksu/ComputerGraphicsTermProject/assets/70150316/6a2c1913-040b-4f87-b811-d06e2e5b7d7b)##
  ## **Directional Light =1** and **Z position =-3**
  ![Resim1](https://github.com/oguzhangoksu/ComputerGraphicsTermProject/assets/70150316/1371b384-dd97-4f9a-8542-992259c4ae3d)##
