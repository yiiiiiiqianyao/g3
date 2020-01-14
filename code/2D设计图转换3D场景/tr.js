let sideWalls = [
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
    }
]
let insideWalls = [
    {//inside wall1
        type: 'insideWall',  
        start: { x: 0, y: 20 }, 
        end: { x: 20, y: 20 },
        children: [
            {
                type: 'door',
                start: { x: 0, y: 20 },
                end: { x: 10, y: 20 }
            }
        ],
        rotation: 0
    },
    {//inside wall2
        type: 'insideWall',  
        start: { x: 20, y: 20 }, 
        end: { x: 0, y: 20 },
        children: [
            {
                type: 'door',
                start: { x: 10, y: 20 },
                end: { x: 0, y: 20 }
            }
        ],
        rotation: -Math.PI
    }
]

let data = []
let sideData = transformWalls(sideWalls)
let insideData = transformWalls(insideWalls)
let floorRoofData = transformGround(sideWalls)
data = [...sideData, ...insideData, ...floorRoofData]
console.log(JSON.stringify(data))

function transformWalls(walls) {
    let data = []
    for(let i = 0;i < walls.length;i++) {
        let wall = walls[i], children = []
        let len = Math.sqrt(Math.pow(wall.start.x - wall.end.x, 2) + Math.pow(wall.start.y - wall.end.y, 2))
        for(let j = 0;j < wall.children.length; j++) {
            let item = {}, child = wall.children[j]
            let startX =  Math.sqrt(Math.pow(wall.start.x - child.start.x, 2) + Math.pow(wall.start.y - child.start.y, 2))
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
        data.push({
            type: wall.type,
            children, 
            start: { x: 0, y: 0 },
            path: [
                { x: 0, y: 30 },
                { x: len, y: 30 },
                { x: len, y: 0 },
                { x: 0, y: 0 }
            ],
            position: { x: wall.start.x, y: 0, z: wall.start.y },
            rotation: { x: 0, y: wall.rotation }
        })
    } 
    return data
}

function transformGround(sideWalls) {
    let fpoints = []
    let rpoints = []
    for(let i = 0;i < sideWalls.length;i++) {
        fpoints.push({ x: sideWalls[i].start.x, y: sideWalls[i].start.y * -1 })
        rpoints.push({ x: sideWalls[i].start.x * -1, y: sideWalls[i].start.y * -1 })
    }
    fpoints.push({ x: sideWalls[0].start.x, y: sideWalls[0].start.y * -1 })
    rpoints.push({ x: sideWalls[0].start.x * -1, y: sideWalls[0].start.y * -1 })
    return [
        {
            type: 'floor',      // 地面
            children: [],
            start: fpoints[0],
            path: fpoints,
            position: { x: 0, y: 0, z: 0},
            rotation: { x: -Math.PI/2, y: 0 }
        },
        {
            type: 'roof',    
            children: [],
            start: rpoints[0],
            path: rpoints,
            position: { x: 0, y: 30, z: 0},
            rotation: { x: -Math.PI/2, y: Math.PI }
        }
    ]
}

