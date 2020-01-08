var data = [ // 这里的data是已经经过二次处理的、由平面转换来的数据，可以直接用于搭建房屋
    {
        type: 'floor',      // 地面
        children: [],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 40 },
            { x: 20, y: 40 },
            { x: 20, y: 20 },
            { x: 40, y: 20 },
            { x: 40, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 0, y: 0, z: 40},
        rotation: { x: -Math.PI/2, y: 0 }
    },
    {
        type: 'roof',       // 天花板
        children: [],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 40 },
            { x: 40, y: 40 },
            { x: 40, y: 20 },
            { x: 20, y: 20 },
            { x: 20, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 0, y: 30, z: 0},
        rotation: { x: Math.PI/2, y: 0 }
    },
    {
        type: 'sideWall',   // 侧面墙体
        children: [],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: 20, y: 30 },
            { x: 20, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 0, y: 0, z: 0},
        rotation: { x: 0, y: 0 }
    },
    {
        type: 'sideWall',
        children: [],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: 20, y: 30 },
            { x: 20, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 20, y: 0, z: 0},
        rotation: { x: 0, y: -Math.PI/2 }
    },
    {
        type: 'sideWall',
        children: [],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: 20, y: 30 },
            { x: 20, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 20, y: 0, z: 20},
        rotation: { x: 0, y: 0 }
    },
    {
        type: 'sideWall',
        children: [
            {
                type: 'win',
                start: { x: 5, y: 10 },
                path: [
                    { x: 5, y: 20 },
                    { x: 15, y: 20 },
                    { x: 15, y: 10 },
                    { x: 5, y: 10 }
                ]
            }
        ],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: 20, y: 30 },
            { x: 20, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 40, y: 0, z: 20},
        rotation: { x: 0, y: -Math.PI/2 }
    },
    {
        type: 'sideWall',
        children: [
            {
                type: 'door',
                start: { x: 10, y: 0 },
                path: [
                    { x: 10, y: 20 },
                    { x: 30, y: 20 },
                    { x: 30, y: 0 },
                    { x: 10, y: 0 }
                ]
            }
        ],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: 40, y: 30 },
            { x: 40, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 40, y: 0, z: 40},
        rotation: { x: 0, y: -Math.PI }
    },
    {
        type: 'sideWall',
        children: [],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: 40, y: 30 },
            { x: 40, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 0, y: 0, z: 40},
        rotation: { x: 0, y: -3*Math.PI/2 }
    },
    {
        type: 'sideWall',
        children: [
            {
                type: 'door',
                start: { x: 5, y: 0 },
                path: [
                    { x: 5, y: 20 },
                    { x: 15, y: 20 },
                    { x: 15, y: 0 },
                    { x: 5, y: 0 }
                ]
            }
        ],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: 20, y: 30 },
            { x: 20, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 0, y: 0, z: 20},
        rotation: { x: 0, y: 0 }
    },
    {
        type: 'sideWall',
        children: [
            {
                type: 'door',
                start: { x: 5, y: 0 },
                path: [
                    { x: 5, y: 20 },
                    { x: 15, y: 20 },
                    { x: 15, y: 0 },
                    { x: 5, y: 0 }
                ]
            }
        ],
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: 20, y: 30 },
            { x: 20, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 20, y: 0, z: 20},
        rotation: { x: 0, y: -Math.PI }
    }
]
let wallGroup = new THREE.Group() // 保存所有的墙壁，地板和天花板

for(let i = 0;i < data.length;i++) {
    generateWall(data[i])
}
let housecenter = getObjectCenter(wallGroup) // 生成的房屋时房屋的中心 
wallGroup.position.set(-housecenter.x, 0, -housecenter.z) // 将生成的房屋移动到场景的中心
scene.add(wallGroup)

function generateWall(wallData) { // 生成墙面
    let shape = new THREE.Shape() 
    shape.moveTo(wallData.start.x, wallData.start.y)
    for(let i = 0; i < wallData.path.length; i++) { // make path
        let p = wallData.path[i]
        shape.lineTo(p.x, p.y)
    }

    for (let i = 0; i < wallData.children.length; i++) { // make holes
        let item = wallData.children[i]
        let hole = new THREE.Path()
        hole.moveTo(item.start.x, item.start.y)
        for(let j =0; j < item.path.length; j++) { // make hole path
            hole.lineTo(item.path[j].x, item.path[j].y)
        }
        shape.holes.push(hole)
    }

    for(let i = 0;i < wallData.children.length; i++){ // make child ( windows/doors )
        let item = wallData.children[i]
        let child = new THREE.Shape() 
        child.moveTo(item.start.x, item.start.y)
        for(let j = 0; j < item.path.length; j++) {
            child.lineTo(item.path[j].x, item.path[j].y)
        }
        let geometry = new THREE.ShapeGeometry( child )
        let color = new THREE.Color( Math.random(), Math.random(), Math.random() )
        let mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({ color }) )
        mesh.position.copy(wallData.position)
        mesh.rotation.x = wallData.rotation.x
        mesh.rotation.y = wallData.rotation.y
        mesh.type = item.type
        // scene.add(mesh)
        wallGroup.add(mesh)
    }

    let geometry = new THREE.ShapeGeometry( shape ) // make wall
    let color = new THREE.Color( Math.random(), Math.random(), Math.random() )
    let mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({ color }) )
    mesh.position.copy(wallData.position)
    mesh.rotation.x = wallData.rotation.x
    mesh.rotation.y = wallData.rotation.y
    mesh.type = wallData.type

    // scene.add(mesh)
    wallGroup.add(mesh)
}