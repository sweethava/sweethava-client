'use client'

import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

const PainterStuff = () => {
    //@ts-ignore
    const { nodes } = useGLTF("./models/scene.glb")
    const meshesMaterial = new MeshStandardMaterial({
        color: '#000',
        roughness: 1,
    })

    return (
        <group dispose={null}>
            <group
                position={[1.4, -2, 0.077]}
                rotation={[Math.PI / 2, 0, -0.077]}
                scale={0.22}
            >
                <group
                    position={[29.591, 8.59, -5.605]}
                    rotation={[1.365, 0.101, 1.581]}
                    scale={0.507}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.board2.geometry}
                        material={meshesMaterial}
                        position={[-4.745, 48.157, 9.11]}
                        rotation={[0, -0.515, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.board3.geometry}
                        material={meshesMaterial}
                        position={[-2.549, 40.476, 8.691]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.board4.geometry}
                        material={meshesMaterial}
                        position={[-5.494, 49.466, 9.285]}
                        scale={[0.744, 0.744, 0.029]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.board5.geometry}
                        material={meshesMaterial}
                        position={[-5.494, 46.907, 9.285]}
                        scale={[0.744, 0.744, 0.029]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.board6.geometry}
                        material={meshesMaterial}
                        position={[-5.503, 48.177, 8.992]}
                        scale={[1, 0.334, 1]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.board7.geometry}
                        material={meshesMaterial}
                        position={[-5.502, 48.105, 8.988]}
                        rotation={[Math.PI / 2, 0, -1.878]}
                        scale={[0.196, 0.196, 0.126]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.part01_board1.geometry}
                        material={meshesMaterial}
                        position={[1.46, 48.128, 9.363]}
                        rotation={[0, 0, 0.013]}
                        scale={1.462}
                    />
                </group>
                <group position={[-14.853, 0.299, 0.212]} rotation={[0, 0, -0.41]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.cloth001.geometry}
                        material={meshesMaterial}
                        position={[4.513, 0.522, -10.193]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.cloth01.geometry}
                        material={meshesMaterial}
                        position={[3.274, -0.658, -10.348]}
                        rotation={[0, 0, 0.751]}
                        scale={0.588}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.cloth02.geometry}
                        material={meshesMaterial}
                        position={[7.166, 1.122, -10.419]}
                        rotation={[-0.074, 0.024, -2.379]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.frame.geometry}
                        material={meshesMaterial}
                        position={[4.261, -0.158, -5.086]}
                        scale={[0.689, 0.659, 0.659]}
                    />
                </group>
                <group
                    position={[13.094, -10.787, -15.536]}
                    rotation={[1.363, 0.075, 0.016]}
                    scale={[0.761, 0.848, 0.848]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.canCube_001_Cube_002.geometry}
                        material={meshesMaterial}
                        position={[-13.378, 0, 0]}
                        scale={[1.132, 1, 1]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.canCube_Cube_001.geometry}
                        material={meshesMaterial}
                        position={[-13.376, 0, 0]}
                        scale={[1.134, 1, 1]}
                    />
                </group>
                <group
                    position={[9.272, 13.648, -9.143]}
                    rotation={[0.016, -0.035, -2.726]}
                    scale={0.185}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details1.geometry}
                        material={meshesMaterial}
                        position={[73.472, 52.664, -6.382]}
                        rotation={[-1.705, -0.028, 0.001]}
                        scale={1.24}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details10.geometry}
                        material={meshesMaterial}
                        position={[73.31, 52.767, -7.864]}
                        rotation={[-0.127, 0.125, 0.045]}
                        scale={0.798}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details11.geometry}
                        material={meshesMaterial}
                        position={[81.774, 54.354, -12.729]}
                        rotation={[-2.47, 1.37, 2.432]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details12.geometry}
                        material={meshesMaterial}
                        position={[83.677, 54.686, -9.745]}
                        rotation={[-0.93, 1.405, 0.909]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details13.geometry}
                        material={meshesMaterial}
                        position={[83.677, 54.686, -9.745]}
                        rotation={[-0.93, 1.405, 0.909]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details14.geometry}
                        material={meshesMaterial}
                        position={[83.677, 54.686, -9.745]}
                        rotation={[-0.93, 1.405, 0.909]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details15.geometry}
                        material={meshesMaterial}
                        position={[83.677, 54.686, -9.745]}
                        rotation={[-0.93, 1.405, 0.909]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details16.geometry}
                        material={meshesMaterial}
                        position={[75.973, 52.928, 2.057]}
                        rotation={[0.043, 0.205, 0.126]}
                        scale={0.926}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details17.geometry}
                        material={meshesMaterial}
                        position={[73.102, 52.558, -9.296]}
                        rotation={[-1.692, -0.045, 0.125]}
                        scale={0.798}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details18.geometry}
                        material={meshesMaterial}
                        position={[72.9, 52.276, -10.284]}
                        rotation={[-0.133, 0.266, 0.047]}
                        scale={0.676}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details19.geometry}
                        material={meshesMaterial}
                        position={[72.73, 54.732, 3.326]}
                        rotation={[-0.175, -0.156, -0.065]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details2.geometry}
                        material={meshesMaterial}
                        position={[73.28, 51.688, 4.446]}
                        scale={1.407}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details20.geometry}
                        material={meshesMaterial}
                        position={[72.73, 54.732, 3.326]}
                        rotation={[-0.175, -0.156, -0.065]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details21.geometry}
                        material={meshesMaterial}
                        position={[72.73, 54.732, 3.326]}
                        rotation={[-0.175, -0.156, -0.065]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details22.geometry}
                        material={meshesMaterial}
                        position={[72.73, 54.732, 3.326]}
                        rotation={[-0.175, -0.156, -0.065]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details23.geometry}
                        material={meshesMaterial}
                        position={[72.73, 54.732, 3.326]}
                        rotation={[-0.175, -0.156, -0.065]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details24.geometry}
                        material={meshesMaterial}
                        position={[72.73, 54.732, 3.326]}
                        rotation={[-0.175, -0.156, -0.065]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details25.geometry}
                        material={meshesMaterial}
                        position={[73.953, 53.656, 3.42]}
                        rotation={[3.022, -0.149, -0.083]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details26.geometry}
                        material={meshesMaterial}
                        position={[73.44, 52.302, -4.899]}
                        rotation={[3.139, 0.027, 0.007]}
                        scale={0.798}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details27.geometry}
                        material={meshesMaterial}
                        position={[74.014, 53.085, 3.648]}
                        rotation={[-3.1, -0.16, -0.059]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details28.geometry}
                        material={meshesMaterial}
                        position={[74.014, 53.085, 3.648]}
                        rotation={[-3.1, -0.16, -0.059]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details29.geometry}
                        material={meshesMaterial}
                        position={[74.014, 53.085, 3.648]}
                        rotation={[-3.1, -0.16, -0.059]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details3.geometry}
                        material={meshesMaterial}
                        position={[73.369, 52.072, 0.246]}
                        scale={0.452}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details30.geometry}
                        material={meshesMaterial}
                        position={[73.953, 53.656, 3.42]}
                        rotation={[3.022, -0.149, -0.083]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details31.geometry}
                        material={meshesMaterial}
                        position={[73.953, 53.656, 3.42]}
                        rotation={[3.022, -0.149, -0.083]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details4.geometry}
                        material={meshesMaterial}
                        position={[62.84, 54.06, -6.172]}
                        rotation={[3.094, 1.172, 0.279]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details5.geometry}
                        material={meshesMaterial}
                        position={[64.711, 50.706, 2.547]}
                        rotation={[-2.639, 0.595, 0.551]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details6.geometry}
                        material={meshesMaterial}
                        position={[64.268, 56.89, -2.769]}
                        rotation={[3.036, 1.034, 1.011]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details7.geometry}
                        material={meshesMaterial}
                        position={[64.268, 56.89, -2.769]}
                        rotation={[3.036, 1.034, 1.011]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details8.geometry}
                        material={meshesMaterial}
                        position={[62.84, 54.06, -6.172]}
                        rotation={[3.094, 1.172, 0.279]}
                        scale={-1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_details9.geometry}
                        material={meshesMaterial}
                        position={[73.257, 54.691, 2.343]}
                        rotation={[3.01, -0.063, -0.025]}
                        scale={-0.928}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.cloth.geometry}
                    material={meshesMaterial}
                    position={[-15.278, -6.154, -12.575]}
                    scale={[0.762, 0.799, 1.058]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.desk.geometry}
                    material={meshesMaterial}
                    position={[-15.504, -6.871, -10.782]}
                    scale={[0.662, 0.662, 0.985]}
                />
                <group
                    position={[9.394, 9.59, 0.07]}
                    rotation={[0, 0, 0.077]}
                    scale={1.998}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desk1.geometry}
                        material={meshesMaterial}
                        position={[-3.628, -5.675, -4.348]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desk2.geometry}
                        material={meshesMaterial}
                        position={[-1.837, -6.983, -0.807]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desk3.geometry}
                        material={meshesMaterial}
                        position={[-5.429, -6.983, -0.807]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desk4.geometry}
                        material={meshesMaterial}
                        position={[-3.628, -5.675, -1.425]}
                        scale={0.872}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desk5.geometry}
                        material={meshesMaterial}
                        position={[-1.837, -4.383, -0.807]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.desk6.geometry}
                        material={meshesMaterial}
                        position={[-5.429, -4.383, -0.807]}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pic.geometry}
                    material={meshesMaterial}
                    position={[-11.032, -1.124, -4.986]}
                    rotation={[0, 0, -0.415]}
                />
                <group
                    position={[19.454, -5.765, 0.175]}
                    rotation={[0, 0, -1.486]}
                    scale={0.659}
                >
                    <group position={[5.926, 0, 0.867]} rotation={[0, 0.309, 0]}>
                        <group
                            position={[3.999, -4.439, -31.41]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={0.269}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube15001.geometry}
                                material={meshesMaterial}
                                position={[18.721, -82.579, -28.726]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder1001.geometry}
                                material={meshesMaterial}
                                position={[18.32, -81.612, -28.787]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder2001.geometry}
                                material={meshesMaterial}
                                position={[18.32, -82.254, -28.787]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder3001.geometry}
                                material={meshesMaterial}
                                position={[18.32, -82.896, -28.787]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder4001.geometry}
                                material={meshesMaterial}
                                position={[18.32, -83.538, -28.787]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder5001.geometry}
                                material={meshesMaterial}
                                position={[18.32, -82.621, -28.787]}
                                scale={0.412}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.polySurface6001.geometry}
                                material={meshesMaterial}
                                position={[14.754, -86.889, -28.652]}
                                scale={0.408}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.polySurface7001.geometry}
                                material={meshesMaterial}
                                position={[14.754, -85.382, -28.652]}
                                scale={0.408}
                            />
                            <group position={[1.105, 0, -4.457]} rotation={[0, -0.505, 0]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.pCube14001.geometry}
                                    material={meshesMaterial}
                                    position={[2.894, -82.579, -29.579]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface4001.geometry}
                                    material={meshesMaterial}
                                    position={[-1.064, -85.382, -29.505]}
                                    scale={0.408}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface5001.geometry}
                                    material={meshesMaterial}
                                    position={[-1.064, -86.889, -29.505]}
                                    scale={0.408}
                                />
                            </group>
                        </group>
                        <group
                            position={[3.999, -3.217, -31.41]}
                            rotation={[0, -Math.PI / 2, 0]}
                            scale={0.269}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube15.geometry}
                                material={meshesMaterial}
                                position={[18.721, -82.579, -28.726]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder1.geometry}
                                material={meshesMaterial}
                                position={[18.32, -81.612, -28.787]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder2.geometry}
                                material={meshesMaterial}
                                position={[18.32, -82.254, -28.787]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder3.geometry}
                                material={meshesMaterial}
                                position={[18.32, -82.896, -28.787]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder4.geometry}
                                material={meshesMaterial}
                                position={[18.32, -83.538, -28.787]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCylinder5.geometry}
                                material={meshesMaterial}
                                position={[18.32, -82.621, -28.787]}
                                scale={0.412}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.polySurface6.geometry}
                                material={meshesMaterial}
                                position={[14.754, -86.889, -28.652]}
                                scale={0.408}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.polySurface7.geometry}
                                material={meshesMaterial}
                                position={[14.754, -85.382, -28.652]}
                                scale={0.408}
                            />
                            <group position={[1.105, 0, -4.457]} rotation={[0, -0.505, 0]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.pCube14.geometry}
                                    material={meshesMaterial}
                                    position={[2.894, -82.579, -29.579]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface4.geometry}
                                    material={meshesMaterial}
                                    position={[-1.064, -85.382, -29.505]}
                                    scale={0.408}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface5.geometry}
                                    material={meshesMaterial}
                                    position={[-1.064, -86.889, -29.505]}
                                    scale={0.408}
                                />
                            </group>
                        </group>
                        <group
                            position={[3.069, -2.17, -29.826]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={0.584}
                        >
                            <group position={[-0.183, 0.058, 0]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.pCube21.geometry}
                                    material={meshesMaterial}
                                    position={[4.224, 13.228, -41.686]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface8.geometry}
                                    material={meshesMaterial}
                                    position={[4.224, 13.228, -41.686]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface9.geometry}
                                    material={meshesMaterial}
                                    position={[4.224, 13.228, -41.686]}
                                />
                            </group>
                            <group
                                position={[0.484, 2.606, -0.078]}
                                rotation={[3.052, -0.009, -2.624]}
                                scale={-1}
                            >
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.pCube21001.geometry}
                                    material={meshesMaterial}
                                    position={[-4.39, -16.964, -40.293]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface8001.geometry}
                                    material={meshesMaterial}
                                    position={[-4.39, -16.964, -40.293]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface9001.geometry}
                                    material={meshesMaterial}
                                    position={[-4.39, -16.964, -40.293]}
                                />
                            </group>
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube11.geometry}
                            material={meshesMaterial}
                            position={[11.566, -26.062, -6.134]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube12.geometry}
                            material={meshesMaterial}
                            position={[7.73, -24.346, 2.468]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube13.geometry}
                            material={meshesMaterial}
                            position={[7.73, -27.772, 2.468]}
                            rotation={[Math.PI, 0, Math.PI]}
                            scale={-1}
                        />
                    </group>
                    <group position={[-7.733, 0, 0]} rotation={[0, -0.163, 0]}>
                        <group position={[10.11, 1.258, -14.043]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube5.geometry}
                                material={meshesMaterial}
                                position={[0.903, -27.268, -2.519]}
                                rotation={[0, -1.571, 0]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube6.geometry}
                                material={meshesMaterial}
                                position={[-0.225, -27.268, -1.223]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube7.geometry}
                                material={meshesMaterial}
                                position={[-0.245, -34.397, -1.95]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube8.geometry}
                                material={meshesMaterial}
                                position={[-0.245, -20.131, -1.95]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube9.geometry}
                                material={meshesMaterial}
                                position={[-0.883, -27.274, -1.533]}
                            />
                        </group>
                        <group position={[7.402, -1.362, -34.12]} scale={0.506}>
                            <group
                                position={[-9.253, 0.581, -3.564]}
                                rotation={[0, 1.571, 0]}
                                scale={0.177}
                            >
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polySurface11.geometry}
                                    material={meshesMaterial}
                                    position={[10.859, -274.484, 89.272]}
                                    scale={0.609}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.pPipe1.geometry}
                                    material={meshesMaterial}
                                    position={[4.867, -278.847, 89.276]}
                                    scale={0.609}
                                />
                            </group>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube23.geometry}
                                material={meshesMaterial}
                                position={[6.966, -48.774, -4.126]}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.pCube24.geometry}
                                material={meshesMaterial}
                                position={[6.593, -48.801, -2.82]}
                                scale={[1, 1.095, 1]}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube1.geometry}
                            material={meshesMaterial}
                            position={[8.006, -20.876, -0.725]}
                            rotation={[-0.175, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube10.geometry}
                            material={meshesMaterial}
                            position={[11.807, -26.069, -13.439]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube2.geometry}
                            material={meshesMaterial}
                            position={[8.006, -31.204, -0.519]}
                            rotation={[-2.967, 0, -Math.PI]}
                            scale={-1}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube3.geometry}
                            material={meshesMaterial}
                            position={[11.344, -25.993, -27.78]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube4.geometry}
                            material={meshesMaterial}
                            position={[11.807, -26.069, -30.847]}
                        />
                    </group>
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.paper15.geometry}
                    material={meshesMaterial}
                    position={[-20.504, -1.711, -0.871]}
                    rotation={[1.343, 0.095, -1.328]}
                    scale={[0.697, 0.577, 0.671]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.paper16.geometry}
                    material={meshesMaterial}
                    position={[-14.092, 2.905, 0.005]}
                    rotation={[1.013, -0.736, 1.125]}
                    scale={[0.697, 0.577, 0.671]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.paper17.geometry}
                    material={meshesMaterial}
                    position={[-6.382, -7.288, -0.101]}
                    rotation={[0, 0, 0.869]}
                    scale={[1.207, 0.85, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.paper18.geometry}
                    material={meshesMaterial}
                    position={[-10.237, 0.954, -0.074]}
                    rotation={[0, 0, 1.989]}
                    scale={[1.038, 0.859, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.paper19.geometry}
                    material={meshesMaterial}
                    position={[-4.783, -0.947, -0.064]}
                    rotation={[0, 0, -0.207]}
                    scale={[1.038, 0.859, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.paper20.geometry}
                    material={meshesMaterial}
                    position={[-7.761, 3.637, -0.025]}
                    rotation={[0, 0, 0.869]}
                    scale={[1.207, 0.85, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.paper21.geometry}
                    material={meshesMaterial}
                    position={[-7.53, -6.588, -0.119]}
                    rotation={[0, 0, 0.869]}
                    scale={[1.207, 0.85, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.paper22.geometry}
                    material={meshesMaterial}
                    position={[-7.465, -6.736, -0.102]}
                    rotation={[0, 0, 0.869]}
                    scale={[1.207, 0.85, 1]}
                />
            </group>
            <mesh receiveShadow position={[0, -2, 0]} rotation-x={-Math.PI / 2} material={meshesMaterial}>
                <planeGeometry args={[50, 50]} />
            </mesh>
        </group>
    )
}

useGLTF.preload("./models/scene.glb");

export default PainterStuff