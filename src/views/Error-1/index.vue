<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Mesh } from 'components-log';

const mesh1Ref = ref();
const mesh2Ref = ref();
const mesh3Ref = ref();
const mesh4Ref = ref();
const mesh5Ref = ref();


onMounted(() => {
    meshAnimate();
})

const meshAnimate = () => {
    gsap.fromTo(mesh2Ref.value, {
        x: -67,
        y: 0,
        opacity: 0.6,
    }, {
        duration: 15,
        x: 82,
        y: -12,
        // ease: 'elastic',
        repeat: -1,
        yoyo: true,
    });
    gsap.fromTo(mesh1Ref.value, {
        x: 50,
        y: 0,
        opacity: 1,
    }, {
        opacity: 0.6,
        duration: 12,
        x: -60,
        y: 13,
        repeat: -1,
        yoyo: true,
    });
    gsap.fromTo(mesh3Ref.value, {
        x: 0,
        y: -48,
        opacity: 0.2,
    }, {
        opacity: 1,
        duration: 22,
        x: 12,
        y: 62,
        repeat: -1,
        yoyo: true,
    });
    gsap.fromTo(mesh4Ref.value, {
        x: 24,
        y: 67,
        opacity: 0.8,
    }, {
        opacity: 1,
        duration: 40,
        x: -32,
        y: -40,
        repeat: -1,
        yoyo: true,
    });
    gsap.fromTo(mesh5Ref.value, {
        x: 0,
        y: 0,
        opacity: 0.3,
    }, {
        opacity: 0.8,
        duration: 30,
        x: 67,
        y: 27,
        repeat: -1,
        yoyo: true,
    });
}

const skip=()=>{
    const baseUrl = window.location.origin;
    window.open(baseUrl,'_self');
}

</script>

<template>
    <div class="w-full h-full flex justify-center items-center">
        <div
            class="w-96/100 h-96/100 bg-gray-100/70 rounded-xl z-1 outline outline-gray-300/50 outline-10 flex justify-center">
            <div class="header h-14 w-full top-8 absolute">
                <p class="ml-5 py-1 font-mono text-3xl text-blue-500 md:ml-20">Log vn</p>
            </div>
            <div class="flex justify-center items-center w-120">
                <div class="w-64 h-64 mx-auto absolute" ref="mesh1Ref">
                    <Mesh class="rounded-full absolute blur-lg" :speed="0.3" :base-color="'#fb8e82'" :mode="'analogous'"
                        :animation="true"></Mesh>
                </div>
                <div class="w-64 h-64 mx-auto  absolute" ref="mesh2Ref">
                    <Mesh class="rounded-full absolute blur-lg" :speed="0.2" :base-color="'#eb61a0'" :mode="'analogous'"
                        :animation="true"></Mesh>
                </div>
                <div class="w-64 h-64 mx-auto  absolute" ref="mesh3Ref">
                    <Mesh class="rounded-full absolute blur-lg" :speed="0.22" :base-color="'#a58fd3'" :mode="'analogous'"
                        :animation="true"></Mesh>
                </div>
                <div class="w-64 h-64 mx-auto  absolute" ref="mesh4Ref">
                    <Mesh class="rounded-full absolute blur-lg" :speed="0.22" :base-color="'#6f49e1'" :mode="'analogous'"
                        :animation="true"></Mesh>
                </div>
                <div class="w-64 h-64 mx-auto  absolute" ref="mesh5Ref">
                    <Mesh class="rounded-full absolute blur-lg" :speed="0.22" :base-color="'#7df6aa'" :mode="'analogous'"
                        :animation="true"></Mesh>
                </div>
            </div>
            <div class="w-100 h-14 md:120 text-center text-3xl md:text-5xl  font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#9c42ff] to-[#36bcfe] z-999 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p>404 NOT FOUND</p>
            <button @click="skip" class="border-none w-36 rounded-lg px-3 py-2 text-white font-mono text-xl bg-gradient-to-r from-violet-500/90 to-fuchsia-500/80 hover-md hover:shadow-lg">Back Home</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
