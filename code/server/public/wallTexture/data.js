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
        position: { x: 0, y: 0, z: 0},
        rotation: { x: 0, y: 0 }
    },
    {
        type: 'sideWall',
        children: [
            // {
            //     type: 'door',
            //     start: { x: 0, y: 0 },
            //     path: [
            //         { x: 0, y: 20 },
            //         { x: 10, y: 20 },
            //         { x: 10, y: 0 },
            //         { x: 0, y: 0 }
            //     ]
            // }
        ],
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
                    { x: 20, y: 20 },
                    { x: 20, y: 0 },
                    { x: 10, y: 0 }
                ]
            },
            {
                type: 'door',
                start: { x: 20, y: 0 },
                path: [
                    { x: 20, y: 20 },
                    { x: 30, y: 20 },
                    { x: 30, y: 0 },
                    { x: 20, y: 0 }
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
            { x: 40, y: 30 },
            { x: 40, y: 0 },
            { x: 0, y: 0 }
        ],
        position: { x: 0, y: 0, z: 40},
        rotation: { x: 0, y: -3*Math.PI/2 }
    },
    {
        type: 'insideWall',
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
        type: 'insideWall',
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