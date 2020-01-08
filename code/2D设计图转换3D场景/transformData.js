
// 标准坐标系 x轴正方向是水平向右 y轴正方向是垂直向下 
let rawData = [ // side wall datas
    {// wall1
        type: 'sideWall',           // 墙壁的类型
        start: { x: 0, y: 0 },  // 墙壁的起始点
        end: { x: 20, y: 0 },   // 墙壁的终点
        children: [],           // 当前墙壁包含的子对象(窗户、门)
        rotation: 0               // 是墙壁线段与x轴正方向的夹角
    },
    {//wall2
        type: 'sideWall',  
        start: { x: 20, y: 0 }, 
        end: { x: 20, y: 20 },
        children: [],
        rotation: -Math.PI/2
    },
    {//wall3
        type: 'sideWall',  
        start: { x: 20, y: 20 }, 
        end: { x: 40, y: 20 },
        children: [],
        rotation: 0
    },
    {//wall4
        type: 'sideWall',  
        start: { x: 40, y: 20 }, 
        end: { x: 40, y: 40 },
        children: [
            {
                type: 'win',
                start: { x: 40, y: 25 },
                end: { x: 40, y: 35 }
            }
        ],
        rotation: -Math.PI/2
    },
    {//wall5
        type: 'sideWall',  
        start: { x: 40, y: 40 }, 
        end: { x: 0, y: 40 },
        children: [
            {
                type: 'door',
                start: { x: 30, y: 40 },
                end: { x: 10, y: 40 }
            }
        ],
        rotation: -Math.PI
    },
    {//wall6
        type: 'sideWall',  
        start: { x: 0, y: 40 }, 
        end: { x: 0, y: 0 },
        children: [],
        rotation: -3*Math.PI/2
    },
    {//inside wall1
        type: 'sideWall',  
        start: { x: 0, y: 20 }, 
        end: { x: 20, y: 20 },
        children: [
            {
                type: 'door',
                start: { x: 5, y: 20 },
                end: { x: 15, y: 20 }
            }
        ],
        rotation: 0
    },
    {//inside wall2
        type: 'sideWall',  
        start: { x: 20, y: 20 }, 
        end: { x: 0, y: 20 },
        children: [
            {
                type: 'door',
                start: { x: 15, y: 20 },
                end: { x: 5, y: 20 }
            }
        ],
        rotation: -Math.PI
    }
]

let floorRawData = [ // 用于构建地面的2维数据，其墙面的顺序为顺时针(数据一定是有顺序的)
    { x: 0, y: 0 },
    { x: 20, y: 0 }, 
    { x: 20, y: 20 },
    { x: 40, y: 20 },
    { x: 40, y: 40 },
    { x: 0, y: 40 },
    { x: 0, y: 0 }
]

let roofRawData = [
    { x: 0, y: 0 },
    { x: 20, y: 0 }, 
    { x: 20, y: 20 },
    { x: 40, y: 20 },
    { x: 40, y: 40 },
    { x: 0, y: 40 },
    { x: 0, y: 0 }
]

// 在转换的时候默认房间的高度是3m 窗户默认离地1m 门默认2m高

console.log(JSON.stringify(rawData.map(d=>{ // 侧面
    let len = Math.sqrt(Math.pow(d.start.x - d.end.x, 2) + Math.pow(d.start.y - d.end.y, 2))
    let children = []
    for(let i = 0;i < d.children.length; i++) {
        let item = {}, child = d.children[i]
        let startX =  Math.sqrt(Math.pow(d.start.x - child.start.x, 2) + Math.pow(d.start.y - child.start.y, 2))
        item.start = { x: startX, y: 10 }
        let childLen = Math.sqrt(Math.pow(child.start.x - child.end.x, 2) + Math.pow(child.start.y - child.end.y, 2))
        item.path = [
            { x: startX, y: 20 },
            { x: startX + childLen, y: 20 },
            { x: startX + childLen, y: child.type=='win'?10:0 },
            { x: startX, y: child.type=='win'?10:0 }
        ]
        children.push(item)
    }
    return {
        type: d.type,
        children, 
        start: { x: 0, y: 0 },
        path: [
            { x: 0, y: 30 },
            { x: len, y: 30 },
            { x: len, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: d.start.x, y: 0, z: d.start.y },
        rotation: { x: 0, y: d.rotation }
    }
})))

var path = floorRawData.slice(1).map(d=>{
    d.y*=-1
    return d
})

console.log(JSON.stringify(
   {
        type: 'floor',      // 地面
        children: [],
        start: floorRawData[0],
        path,
        position: { x: 0, y: 0, z: 0},
        rotation: { x: -Math.PI/2, y: 0 }
    }
))

var path = roofRawData.slice(1).map(d=>{
    d.x*=-1
    d.y*=-1
    return d
})

console.log(JSON.stringify(
    {
         type: 'roof',    
         children: [],
         start: roofRawData[0],
         path,
         position: { x: 0, y: 30, z: 0},
         rotation: { x: -Math.PI/2, y: Math.PI }
     }
 ))

// floorRawData transform
let f = {
    type: 'floor',      // 地面
    children: [],
    start: { x: 0, y: 0 },
    path: [
        { x: 20, y: 0 },
        { x: 20, y: -20 },
        { x: 40, y: -20 },
        { x: 40, y: -40 },
        { x: 0, y: -40 },
        { x: 0, y: 0 }
    ],
    position: { x: 0, y: 0, z: 0},
    rotation: { x: -Math.PI/2, y: 0 }
}

let f2 = {
    type: 'floor',      // 地面
    children: [],
    start: { x: 40, y: -20 },
    path: [
        { x: 40, y: -40 },
        { x: 0, y: -40 },
        { x: 0, y: 0 },
        { x: 20, y: 0 },
        { x: 20, y: -20 },
        { x: 40, y: -20 }
    ],
    position: { x: 0, y: 0, z: 0},
    rotation: { x: -Math.PI/2, y: 0 }
}

let r = {
    type: 'roof',      // 地面
    children: [],
    start: { x: 0, y: 0 },
    path: [
        { x: -20, y: 0 },
        { x: -20, y: -20 },
        { x: -40, y: -20 },
        { x: -40, y: -40 },
        { x: 0, y: -40 },
        { x: 0, y: 0 }
    ],
    position: { x: 0, y: 30, z: 0},
    rotation: { x: -Math.PI/2, y: Math.PI }
}