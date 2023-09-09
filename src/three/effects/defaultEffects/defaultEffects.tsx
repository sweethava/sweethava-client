'use client'

import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing"

const DefaultEffects = () => {
    return (
        <EffectComposer>
            <Noise opacity={0.07} />
        </EffectComposer>
    )
}

export default DefaultEffects