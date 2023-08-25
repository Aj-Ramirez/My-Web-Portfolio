const icons = [
     {
       svg: `
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
        <path d="M10 29L10 29c-2.209 0-4-1.791-4-4l0 0c0-2.209 1.791-4 4-4h2.857C13.488 21 14 21.512 14 22.143V25C14 27.209 12.209 29 10 29zM20 9h-2.857C16.512 9 16 8.488 16 7.857V2.143C16 1.512 16.512 1 17.143 1H20c2.209 0 4 1.791 4 4l0 0C24 7.209 22.209 9 20 9zM10 1h2.857C13.488 1 14 1.512 14 2.143v5.714C14 8.488 13.488 9 12.857 9H10C7.791 9 6 7.209 6 5l0 0C6 2.791 7.791 1 10 1zM10 11h2.857C13.488 11 14 11.512 14 12.143v5.714C14 18.488 13.488 19 12.857 19H10c-2.209 0-4-1.791-4-4l0 0C6 12.791 7.791 11 10 11zM20 11A4 4 0 1020 19 4 4 0 1020 11z"></path>
        </svg>
       `,
       text: 'Figma'
     },
     {
       svg: `
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
      <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
</svg>
       `,
       text: 'JavaScript'
     },
     {
       svg: `
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
</svg>
       `,
       text: 'Node.JS'
     },
     {
       svg: `
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
       <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
       </svg>
       `,
       text: 'TypeScript'
     },
     {
       svg: `
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
       <path d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" ></circle>
       </svg>
       `,
       text: 'ReactJS'
     },
     {
       svg: `
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 29.867188 3.007813 C 29.761719 3.023438 29.65625 3.054688 29.554688 3.101563 C 28.695313 3.527344 27.71875 4.792969 27.53125 5.042969 C 27.519531 5.058594 27.507813 5.074219 27.5 5.089844 C 26.535156 6.535156 26.019531 8.226563 26 9.988281 C 25.988281 11.308594 26.246094 12.617188 26.769531 13.878906 C 27.988281 16.804688 30.519531 19.226563 33.53125 20.359375 C 33.632813 20.394531 33.730469 20.429688 33.90625 20.492188 C 33.921875 20.5 34.070313 20.546875 34.09375 20.550781 L 34.203125 20.589844 C 34.359375 20.640625 34.519531 20.691406 34.675781 20.722656 C 35.46875 20.882813 36.242188 20.972656 36.96875 20.996094 C 37.09375 20.996094 37.21875 21 37.34375 21 C 42.824219 21 44.949219 17.132813 45.65625 15.84375 C 45.726563 15.71875 45.777344 15.617188 45.824219 15.554688 C 45.824219 15.550781 45.824219 15.550781 45.828125 15.546875 C 46.136719 15.089844 46.019531 14.46875 45.5625 14.15625 C 45.109375 13.847656 44.488281 13.964844 44.175781 14.421875 C 44.175781 14.421875 44.171875 14.421875 44.171875 14.421875 C 42.710938 16.574219 40.210938 17.226563 36.746094 16.367188 C 36.488281 16.304688 36.207031 16.207031 35.957031 16.113281 C 35.628906 15.996094 35.300781 15.859375 34.996094 15.710938 C 34.390625 15.410156 33.820313 15.050781 33.304688 14.652344 C 30.257813 12.289063 29.066406 7.371094 30.847656 4.53125 C 31.085938 4.152344 31.042969 3.660156 30.742188 3.328125 C 30.515625 3.078125 30.1875 2.964844 29.867188 3.007813 Z M 21.007813 5 C 20.78125 4.996094 20.550781 5.070313 20.363281 5.226563 C 18.851563 6.457031 17.304688 8.472656 17.238281 8.554688 C 17.230469 8.570313 17.222656 8.582031 17.210938 8.597656 C 14.476563 12.578125 14.269531 18.242188 16.6875 23.027344 C 17.066406 23.785156 17.496094 24.507813 17.953125 25.171875 L 18.089844 25.367188 C 18.476563 25.933594 18.910156 26.574219 19.464844 27.074219 C 19.65625 27.292969 19.863281 27.503906 20.066406 27.707031 L 20.164063 27.808594 L 20.246094 27.890625 C 20.453125 28.089844 20.664063 28.292969 20.882813 28.488281 C 20.882813 28.488281 20.886719 28.488281 20.886719 28.488281 C 20.902344 28.511719 20.925781 28.527344 20.945313 28.546875 C 21.191406 28.765625 21.441406 28.972656 21.773438 29.234375 L 21.863281 29.300781 C 22.121094 29.507813 22.382813 29.703125 22.652344 29.894531 C 22.679688 29.914063 22.707031 29.933594 22.734375 29.953125 C 22.828125 30.015625 22.921875 30.074219 23.015625 30.140625 L 23.109375 30.203125 L 23.21875 30.273438 C 23.417969 30.40625 23.613281 30.527344 23.890625 30.6875 C 24.070313 30.796875 24.261719 30.90625 24.386719 30.96875 C 24.441406 31 24.5 31.03125 24.636719 31.105469 L 24.941406 31.265625 C 24.957031 31.273438 25.027344 31.304688 25.042969 31.3125 C 25.242188 31.414063 25.449219 31.511719 25.65625 31.605469 L 25.972656 31.746094 C 26.179688 31.835938 26.390625 31.921875 26.648438 32.019531 L 26.765625 32.0625 C 26.773438 32.070313 26.871094 32.105469 26.878906 32.109375 C 27.066406 32.175781 27.257813 32.242188 27.449219 32.304688 L 27.886719 32.449219 C 28.105469 32.523438 28.359375 32.609375 28.636719 32.65625 C 30 32.882813 31.324219 33 32.578125 33 C 32.726563 33 32.875 32.996094 33.019531 32.996094 C 44.058594 32.753906 46.929688 23.375 46.957031 23.28125 C 47.09375 22.808594 46.871094 22.304688 46.425781 22.09375 C 45.980469 21.882813 45.449219 22.03125 45.171875 22.4375 C 42.375 26.523438 37.085938 28.25 31.699219 26.828125 C 31.449219 26.765625 31.207031 26.695313 30.90625 26.597656 C 30.855469 26.582031 30.8125 26.566406 30.730469 26.535156 C 30.554688 26.480469 30.382813 26.421875 30.1875 26.347656 L 29.910156 26.242188 C 29.75 26.179688 29.589844 26.117188 29.394531 26.03125 L 29.265625 25.972656 C 29.027344 25.871094 28.796875 25.757813 28.589844 25.65625 L 28.019531 25.359375 C 27.890625 25.296875 27.777344 25.226563 27.601563 25.121094 L 27.503906 25.066406 L 27.40625 25.007813 C 27.261719 24.921875 27.117188 24.832031 26.984375 24.738281 L 26.890625 24.679688 C 26.882813 24.675781 26.804688 24.621094 26.796875 24.613281 C 26.679688 24.539063 26.566406 24.464844 26.457031 24.394531 C 26.214844 24.222656 25.976563 24.042969 25.699219 23.824219 L 25.589844 23.734375 C 23.011719 21.675781 21.105469 18.925781 20.210938 15.976563 C 19.378906 13.269531 19.996094 9.726563 21.863281 6.5 C 22.105469 6.082031 22.015625 5.550781 21.644531 5.238281 C 21.460938 5.082031 21.234375 5 21.007813 5 Z M 10.003906 8 C 9.765625 8 9.523438 8.085938 9.332031 8.257813 C 7.421875 9.972656 5.992188 12.195313 5.835938 12.449219 C 1.75 18.398438 2.539063 27.644531 5.34375 33.296875 C 5.398438 33.414063 5.457031 33.527344 5.515625 33.640625 L 5.554688 33.703125 C 5.605469 33.816406 5.664063 33.933594 5.683594 33.957031 C 5.714844 34.03125 5.761719 34.113281 5.78125 34.136719 C 5.828125 34.234375 5.875 34.320313 5.960938 34.46875 L 6.28125 35.019531 C 6.328125 35.09375 6.375 35.171875 6.390625 35.199219 C 6.453125 35.300781 6.519531 35.40625 6.585938 35.511719 L 6.742188 35.761719 C 6.789063 35.835938 6.835938 35.902344 6.867188 35.941406 C 7.023438 36.183594 7.179688 36.425781 7.351563 36.65625 C 7.359375 36.667969 7.367188 36.675781 7.375 36.683594 L 7.4375 36.769531 C 7.578125 36.972656 7.722656 37.167969 7.851563 37.328125 L 8.421875 38.050781 C 8.429688 38.058594 8.492188 38.132813 8.496094 38.140625 L 8.578125 38.234375 C 8.75 38.445313 8.933594 38.65625 9.117188 38.859375 C 9.144531 38.890625 9.171875 38.917969 9.199219 38.949219 C 9.375 39.140625 9.554688 39.332031 9.742188 39.53125 L 9.921875 39.703125 C 10.070313 39.859375 10.21875 40.011719 10.375 40.15625 C 10.375 40.160156 10.449219 40.230469 10.449219 40.230469 L 10.605469 40.375 C 10.792969 40.554688 10.988281 40.734375 11.136719 40.859375 C 11.144531 40.871094 11.285156 40.992188 11.296875 41 C 11.480469 41.164063 11.664063 41.320313 11.851563 41.472656 L 12.808594 42.230469 C 12.96875 42.347656 13.132813 42.464844 13.320313 42.601563 C 13.382813 42.648438 13.449219 42.695313 13.515625 42.738281 C 13.542969 42.761719 13.574219 42.785156 13.59375 42.796875 L 14.3125 43.277344 C 14.574219 43.449219 14.835938 43.609375 15.15625 43.800781 L 15.328125 43.898438 C 15.527344 44.015625 15.730469 44.132813 15.921875 44.234375 C 16.035156 44.296875 16.148438 44.351563 16.246094 44.402344 C 16.382813 44.476563 16.53125 44.558594 16.757813 44.667969 C 16.777344 44.679688 16.9375 44.757813 16.957031 44.765625 C 17.183594 44.878906 17.414063 44.984375 17.703125 45.113281 C 17.703125 45.117188 17.796875 45.160156 17.796875 45.160156 C 18.0625 45.273438 18.320313 45.382813 18.660156 45.519531 C 18.714844 45.542969 18.769531 45.5625 18.78125 45.566406 C 19.023438 45.660156 19.277344 45.753906 19.484375 45.828125 C 19.503906 45.835938 19.609375 45.878906 19.628906 45.886719 C 19.90625 45.980469 20.179688 46.070313 20.53125 46.179688 C 20.589844 46.199219 20.652344 46.21875 20.660156 46.21875 L 20.859375 46.28125 C 21.101563 46.355469 21.34375 46.433594 21.605469 46.484375 C 23.464844 46.824219 25.28125 47 27 47 L 27.003906 47 C 41.328125 47 45.890625 35.472656 45.9375 35.355469 C 46.113281 34.890625 45.921875 34.367188 45.484375 34.125 C 45.054688 33.886719 44.507813 34 44.203125 34.394531 C 40.527344 39.234375 33.59375 41.03125 25.65625 39.207031 C 25.464844 39.160156 25.269531 39.105469 25.078125 39.046875 L 24.703125 38.933594 C 24.449219 38.855469 24.195313 38.769531 23.949219 38.683594 C 23.945313 38.683594 23.832031 38.640625 23.832031 38.640625 C 23.613281 38.566406 23.394531 38.480469 23.203125 38.40625 L 22.984375 38.320313 C 22.742188 38.222656 22.5 38.121094 22.265625 38.015625 L 22.128906 37.957031 C 21.917969 37.859375 21.714844 37.765625 21.511719 37.664063 C 21.496094 37.65625 21.335938 37.578125 21.320313 37.574219 C 21.179688 37.503906 21.039063 37.429688 20.859375 37.332031 L 20.042969 36.894531 C 19.960938 36.839844 19.875 36.789063 19.792969 36.746094 C 19.546875 36.59375 19.292969 36.441406 19.042969 36.28125 C 18.984375 36.246094 18.933594 36.207031 18.835938 36.140625 C 18.664063 36.03125 18.496094 35.917969 18.25 35.746094 L 18.152344 35.675781 C 17.984375 35.558594 17.820313 35.433594 17.683594 35.332031 C 17.597656 35.269531 17.511719 35.199219 17.371094 35.09375 C 17.246094 34.996094 17.121094 34.902344 17.003906 34.808594 L 16.785156 34.628906 C 16.601563 34.480469 16.429688 34.324219 16.25 34.171875 C 16.226563 34.148438 16.207031 34.132813 16.179688 34.113281 C 15.980469 33.929688 15.777344 33.746094 15.535156 33.515625 L 14.828125 32.8125 C 14.65625 32.636719 14.484375 32.457031 14.289063 32.242188 C 14.109375 32.042969 13.9375 31.84375 13.707031 31.570313 L 13.285156 31.054688 C 13.234375 30.980469 13.179688 30.90625 13.113281 30.828125 C 12.96875 30.632813 12.824219 30.441406 12.679688 30.238281 C 8.789063 24.878906 7.773438 13.691406 10.804688 9.59375 C 11.109375 9.183594 11.054688 8.605469 10.671875 8.257813 C 10.484375 8.085938 10.242188 8 10.003906 8 Z"></path>
</svg>
       `,
       text: 'JQuery'
     },
     {
       svg: `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M43.03,27.802c-1.747,0.009-3.261,0.429-4.53,1.054c-0.464-0.926-0.934-1.741-1.013-2.347 c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125c-0.007-0.089-0.109-0.518-1.117-0.526 c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.296,0.865-0.416,1.49c-0.177,0.914-2.012,4.174-3.055,5.879 c-0.341-0.666-0.631-1.252-0.691-1.716c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125 c-0.007-0.089-0.109-0.518-1.117-0.526c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.21,0.888-0.416,1.49 c-0.207,0.602-2.647,6.039-3.286,7.448c-0.326,0.718-0.609,1.295-0.809,1.689c-0.001-0.001-0.001-0.002-0.001-0.002 s-0.012,0.026-0.034,0.071c-0.171,0.335-0.273,0.521-0.273,0.521s0.001,0.003,0.003,0.007c-0.136,0.246-0.281,0.475-0.353,0.475 c-0.05,0-0.151-0.656,0.022-1.555c0.363-1.886,1.235-4.828,1.227-4.929c-0.004-0.052,0.162-0.564-0.57-0.833 c-0.711-0.26-0.965,0.174-1.03,0.175c-0.063,0.001-0.11,0.153-0.11,0.153s0.793-3.308-1.512-3.308c-1.44,0-3.436,1.576-4.42,3.004 c-0.62,0.338-1.948,1.063-3.357,1.837c-0.541,0.297-1.093,0.601-1.617,0.89c-0.036-0.039-0.071-0.079-0.108-0.118 c-2.794-2.981-7.958-5.089-7.739-9.096c0.08-1.457,0.586-5.293,9.924-9.946c7.649-3.812,13.773-2.763,14.831-0.438 c1.512,3.321-3.273,9.494-11.216,10.384c-3.027,0.339-4.62-0.834-5.017-1.271c-0.417-0.46-0.479-0.481-0.635-0.394 c-0.254,0.141-0.093,0.547,0,0.789c0.237,0.617,1.21,1.712,2.87,2.256c1.46,0.479,5.013,0.742,9.311-0.92 c4.813-1.862,8.571-7.041,7.468-11.37c-1.123-4.403-8.423-5.85-15.332-3.396c-4.112,1.461-8.563,3.754-11.764,6.747 c-3.806,3.56-4.412,6.658-4.162,7.952c0.889,4.6,7.228,7.595,9.767,9.815c-0.125,0.069-0.243,0.134-0.35,0.193 c-1.273,0.63-6.105,3.159-7.314,5.831c-1.371,3.031,0.218,5.206,1.271,5.499c3.26,0.907,6.606-0.725,8.404-3.407 c1.798-2.681,1.578-6.172,0.753-7.766c-0.01-0.02-0.022-0.039-0.032-0.059c0.329-0.195,0.664-0.392,0.996-0.587 c0.648-0.38,1.284-0.735,1.836-1.036c-0.309,0.846-0.535,1.86-0.653,3.325c-0.138,1.721,0.567,3.945,1.49,4.82 c0.406,0.385,0.895,0.394,1.205,0.394c1.074,0,1.564-0.893,2.103-1.95c0.662-1.296,1.249-2.804,1.249-2.804 s-0.737,4.075,1.271,4.075c0.731,0,1.467-0.949,1.795-1.432c0.001,0.005,0.001,0.008,0.001,0.008s0.019-0.031,0.056-0.095 c0.076-0.116,0.119-0.19,0.119-0.19s0.002-0.008,0.004-0.021c0.294-0.51,0.946-1.674,1.924-3.594 c1.263-2.48,2.475-5.586,2.475-5.586s0.113,0.76,0.482,2.015c0.217,0.739,0.679,1.556,1.043,2.339 c-0.293,0.407-0.473,0.64-0.473,0.64s0.002,0.004,0.005,0.012c-0.234,0.311-0.497,0.646-0.772,0.974 c-0.997,1.188-2.185,2.544-2.344,2.936c-0.187,0.461-0.143,0.801,0.219,1.073c0.264,0.199,0.735,0.23,1.227,0.197 c0.896-0.06,1.527-0.283,1.838-0.418c0.485-0.171,1.05-0.441,1.58-0.831c0.978-0.719,1.568-1.748,1.512-3.111 c-0.031-0.751-0.271-1.495-0.574-2.198c0.089-0.128,0.178-0.256,0.267-0.387c1.542-2.255,2.738-4.732,2.738-4.732 s0.113,0.76,0.482,2.015c0.187,0.636,0.556,1.329,0.887,2.009c-1.45,1.178-2.349,2.547-2.662,3.445 c-0.577,1.661-0.125,2.414,0.723,2.585c0.384,0.078,0.927-0.098,1.335-0.271c0.508-0.168,1.118-0.449,1.688-0.868 c0.978-0.719,1.919-1.726,1.862-3.089c-0.026-0.62-0.194-1.236-0.422-1.828c1.229-0.512,2.821-0.797,4.848-0.56 c4.349,0.508,5.202,3.223,5.039,4.359c-0.163,1.137-1.075,1.761-1.38,1.95c-0.305,0.189-0.398,0.254-0.372,0.394 c0.037,0.204,0.178,0.196,0.438,0.152c0.358-0.06,2.283-0.924,2.366-3.022C50.102,30.703,47.55,27.778,43.03,27.802z M9.512,39.102 c-1.44,1.571-3.453,2.165-4.316,1.665c-0.932-0.54-0.563-2.854,1.205-4.521c1.077-1.016,2.468-1.952,3.391-2.529 c0.21-0.126,0.518-0.312,0.893-0.537c0.062-0.035,0.097-0.055,0.097-0.055l-0.001-0.002c0.072-0.043,0.147-0.088,0.223-0.134 C11.647,35.363,11.024,37.453,9.512,39.102z M20.005,31.968c-0.502,1.223-1.552,4.352-2.191,4.184 c-0.549-0.144-0.883-2.523-0.11-4.863c0.389-1.178,1.22-2.586,1.709-3.133c0.786-0.879,1.652-1.167,1.862-0.81 C21.544,27.8,20.32,31.201,20.005,31.968z M28.675,36.105c-0.213,0.111-0.408,0.181-0.498,0.127 c-0.067-0.04,0.088-0.186,0.088-0.186s1.084-1.167,1.512-1.698c0.248-0.309,0.537-0.676,0.85-1.086 c0.003,0.041,0.004,0.082,0.004,0.122C30.627,34.782,29.277,35.725,28.675,36.105z M35.354,34.582 c-0.159-0.113-0.132-0.478,0.389-1.614c0.205-0.446,0.672-1.198,1.485-1.916c0.094,0.295,0.152,0.578,0.15,0.842 C37.367,33.653,36.112,34.31,35.354,34.582z"></path>
            </svg>
       `,
       text: 'Sass'
     },
     {
       svg: `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
              </svg>
       `,
       text: 'Tailwind'
     },
     {
       svg: `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
                </svg>
       `,
       text: 'GIT'
     },
     {
      svg: `
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
     <path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z"></path>
     </svg>
      `,
      text: 'HTML'
    },
    {
      svg: `
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
       <path fill-rule="evenodd" d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path>
       </svg>
      `,
      text: 'CSS'
    },
     {
       svg: `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                  <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8 9.9921875 L 11.978516 9.9921875 C 13.947516 9.9921875 15.294922 11.339125 15.294922 13.328125 C 15.294922 15.283125 13.898344 16.623047 11.902344 16.623047 L 9.7636719 16.623047 L 9.7636719 19.857422 L 8 19.857422 L 8 9.9921875 z M 9.7636719 11.46875 L 9.7636719 15.160156 L 11.507812 15.160156 C 12.765813 15.160156 13.503906 14.504125 13.503906 13.328125 C 13.503906 12.119125 12.784672 11.46875 11.513672 11.46875 L 9.7636719 11.46875 z M 19.207031 12.226562 C 20.984031 12.226562 22.099656 13.013047 22.222656 14.373047 L 20.630859 14.373047 C 20.507859 13.847047 20.007844 13.511719 19.214844 13.511719 C 18.442844 13.511719 17.861328 13.881875 17.861328 14.421875 C 17.861328 14.845875 18.21675 15.105391 18.96875 15.275391 L 20.287109 15.576172 C 21.716109 15.897172 22.378906 16.513281 22.378906 17.613281 C 22.378906 19.050281 21.059359 20.007813 19.193359 20.007812 C 17.327359 20.007812 16.151484 19.199844 16.021484 17.839844 L 17.697266 17.839844 C 17.861266 18.393844 18.386375 18.722656 19.234375 18.722656 C 20.088375 18.722656 20.683594 18.346969 20.683594 17.792969 C 20.683594 17.368969 20.363344 17.101359 19.652344 16.943359 L 18.326172 16.636719 C 16.890172 16.308719 16.214844 15.645578 16.214844 14.517578 C 16.214844 13.163578 17.443031 12.226562 19.207031 12.226562 z"></path>
              </svg>
       `,
       text: 'Photoshop'
     },
     {
       svg: `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 19.660156 9.2480469 C 20.282156 9.2480469 20.707031 9.6445469 20.707031 10.185547 C 20.707031 10.726547 20.282156 11.123047 19.660156 11.123047 C 19.045156 11.123047 18.615234 10.726547 18.615234 10.185547 C 18.615234 9.6445469 19.045156 9.2480469 19.660156 9.2480469 z M 11.792969 9.953125 L 13.775391 9.953125 L 17.28125 19.818359 L 15.388672 19.818359 L 14.554688 17.296875 L 10.925781 17.296875 L 10.076172 19.818359 L 8.2929688 19.818359 L 11.792969 9.953125 z M 12.6875 11.832031 L 11.335938 15.900391 L 14.144531 15.900391 L 12.804688 11.832031 L 12.6875 11.832031 z M 18.820312 12.339844 L 20.507812 12.339844 L 20.507812 19.818359 L 18.820312 19.818359 L 18.820312 12.339844 z"></path>
            </svg>
       `,
       text: 'Illustator'
     },
     {
       svg: `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path d="M15.231,11.231c-0.305,0-0.527,0.123-0.668,0.369s-0.211,0.684-0.211,1.313v0.439c0,0.625,0.066,1.062,0.199,1.31 s0.357,0.372,0.674,0.372c0.328,0,0.576-0.146,0.744-0.439V11.7C15.806,11.388,15.56,11.231,15.231,11.231z M19,3H5 C3.896,3,3,3.895,3,5v14c0,1.105,0.896,2,2,2h14c1.104,0,2-0.895,2-2V5C21,3.895,20.104,3,19,3z M10.274,16.3l-1.172-2.982 L7.937,16.3H5.938l2.051-4.301l-2.01-4.23h1.975l1.148,2.93l1.148-2.93h1.975l-2.004,4.23l2.051,4.301H10.274z M17.64,16.3 h-1.506l-0.076-0.645c-0.34,0.508-0.777,0.762-1.313,0.762c-0.664,0-1.171-0.254-1.521-0.762s-0.528-1.254-0.536-2.238v-0.48 c0-1.039,0.176-1.814,0.527-2.326s0.863-0.768,1.535-0.768c0.488,0,0.895,0.211,1.219,0.633V7.3h1.67V16.3z"></path>
              </svg>
       `,
       text: 'Adobe Xd'
     },
     {
       svg: `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M33.406,29.365	c-1.04,2.471-2.968,4.734-6.536,4.734c0,0-1.513-10.543-1.536-10.785c-0.093,0.254-2.229,5.797-2.229,5.797	c-1.005,2.563-2.922,4.976-6.49,4.988l-2.794-17.044c2.321,0,5.185,1.905,5.393,5.046c0,0,0.358,6.247,0.37,6.744	c0.196-0.531,2.621-6.813,2.621-6.813c0.959-2.575,2.772-4.988,6.178-4.988c0,0,1.455,11.247,1.513,11.778	c0.15-0.531,2.148-6.79,2.148-6.79c0.958-2.575,2.817-4.988,6.35-4.988L33.406,29.365z"></path>
                </svg>
       `,
       text: 'Webflow'
     },
     {
       svg: `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M25,2C12.317,2,2,12.318,2,25s10.317,23,23,23s23-10.318,23-23S37.683,2,25,2z M25,7c4.26,0,8.166,1.485,11.247,3.955 c-0.956,0.636-1.547,1.74-1.547,2.945c0,1.6,0.9,3,1.9,4.6c0.8,1.3,1.6,3,1.6,5.4c0,1.7-0.5,3.8-1.5,6.4l-2,6.6l-7.1-21.2 c1.2-0.1,2.3-0.2,2.3-0.2c1-0.1,0.9-1.6-0.1-1.6c0,0,0,0-0.1,0c0,0-3.2,0.3-5.3,0.3c-1.9,0-5.2-0.3-5.2-0.3s0,0-0.1,0 c-1,0-1.1,1.6-0.1,1.6c0,0,1,0.1,2.1,0.2l3.1,8.4L19.9,37l-7.2-21.4c1.2-0.1,2.3-0.2,2.3-0.2c1-0.1,0.9-1.6-0.1-1.6c0,0,0,0-0.1,0 c0,0-2.152,0.202-4.085,0.274C14.003,9.78,19.168,7,25,7z M7,25c0-1.8,0.271-3.535,0.762-5.174l7.424,20.256 C10.261,36.871,7,31.323,7,25z M19.678,42.2L25,26.6l5.685,15.471C28.897,42.665,26.989,43,25,43 C23.147,43,21.36,42.719,19.678,42.2z M35.304,39.75L35.304,39.75L40.6,24.4c0.786-2,1.21-3.742,1.39-5.304 C42.633,20.947,43,22.928,43,25C43,31.111,39.954,36.497,35.304,39.75z"></path>
              </svg>
       `,
       text: 'WordPress'
     },
   ];

   const duplicatedObjectIcons = { ...icons };
   
   const iconContainer = document.getElementById('icon-container');

   icons.forEach(icon => {
     const div = document.createElement('div');
     div.classList.add('svg-container');
     div.innerHTML = icon.svg + `<span class="hover-text">${icon.text}</span>`;
     iconContainer.appendChild(div);
   });
   