import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Globe(){
 const globe=useRef<THREE.Mesh>(null); const orbit=useRef<THREE.Group>(null)
 useFrame((_,delta)=>{ if(globe.current) globe.current.rotation.y += delta*.12; if(orbit.current) orbit.current.rotation.z -= delta*.06 })
 return <group rotation={[.18,-.2,.2]}><Float speed={1.2} rotationIntensity={.08} floatIntensity={.2}><mesh ref={globe}><sphereGeometry args={[1.45,48,48]}/><meshStandardMaterial color="#0B2D5C" roughness={.72} metalness={.2} wireframe/></mesh><mesh scale={1.43}><sphereGeometry args={[1,32,32]}/><meshBasicMaterial color="#8DB9F0" transparent opacity={.11}/></mesh><group ref={orbit}><mesh rotation={[Math.PI/2.5,.3,.15]}><torusGeometry args={[1.87,.012,8,128]}/><meshStandardMaterial color="#F4C542" emissive="#F4C542" emissiveIntensity={.7}/></mesh><mesh rotation={[1.1,-.6,.4]}><torusGeometry args={[1.68,.009,8,128]}/><meshBasicMaterial color="#8DB9F0"/></mesh></group><mesh position={[.3,.25,1.38]}><sphereGeometry args={[.07,16,16]}/><meshBasicMaterial color="#F4C542"/></mesh><mesh position={[-.7,-.45,1.19]}><sphereGeometry args={[.055,16,16]}/><meshBasicMaterial color="#F4C542"/></mesh></Float></group>
}

export default function GlobeScene(){return <div className="globe-scene" aria-label="Animated 3D network globe representing India and the United States"><Canvas camera={{position:[0,0,5.4],fov:42}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}><ambientLight intensity={1.1}/><pointLight position={[3,2,4]} color="#8DB9F0" intensity={18}/><Stars radius={25} depth={8} count={500} factor={2.5} fade speed={.4}/><Globe/></Canvas></div>}
