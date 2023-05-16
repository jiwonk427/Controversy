<template>
    <section class="flex justify-center items-center mt-8 gap-1.5">
        <aside>
            <div @click="this.onCheck('a')" class="relative  ">
                <div :class="this.choiseA ? 'bg-[#FF785A80] z-10 flex justify-center items-center rounded-[20px] border-black border-t-2 border-x border-b-4 absolute' : 'hidden'"
                    class="w-[126px] h-[126px]">
                    <img class="w-[50px] h-[50px]" src="/icons/Checkmark.png" />
                </div>
                <img class="w-[126px]" src="/img/food1.png" />
            </div>
            <p class="font-extrabold m-2.5 text-center text-base text-[#444]">부먹</p>
        </aside>
        <img class="w-[50px] relative top-[-15px] h-[65px]" src="/img/common/vs.png" />
        <aside>
            <div @click="this.onCheck('b')" class="relative  ">
                <div :class="this.choiseB ? 'bg-[#FF785A80] z-10 flex justify-center items-center rounded-[20px] border-black border-t-2 border-x border-b-4 absolute' : 'hidden'"
                    class="w-[126px] h-[126px]">
                    <img class="w-[50px] h-[50px]" src="/icons/Checkmark.png" />
                </div>
                <img class="w-[126px]" src="/img/food2.png" />
            </div>
            <p class="font-extrabold m-2.5 text-center text-base text-[#444]">찍먹</p>
        </aside>
    </section>

    <section
        class="result-box  shadow-md border-primary border-4  rounded-t-[20px] bottom-0  absolute left-5 right-5 bg-white">
        <div @click="this.onPop"
            class=" bg-primary rounded-full w-[40px] h-[40px] flex justify-center left-[calc(50%_-_20px)] -top-[20px] items-center absolute">
            <img :class="this.popUp ? '' : 'rotate-180'" class="w-[20px]" src="/icons/arr-bottom.png" />
        </div>

        <div class="mt-12 flex flex-wrap justify-center ">
            <div class="w-full px-5 mb-5 " :class="this.popUp ? 'block' : 'hidden'">
                <div class="flex justify-between w-full">
                    <p :class="aCount > bCount ? 'font-extrabold ' : 'font-medium font-[OAGothic-M]'"
                        class="text-[#444] text-sm ">
                        A 부먹
                    </p>
                    <p :class="aCount > bCount ? 'font-extrabold ' : 'font-medium font-[OAGothic-M]'" class="text-primary">
                        {{ aCount }}</p>
                </div>
                <div class="flex justify-between w-full">
                    <p :class="aCount < bCount ? 'font-extrabold ' : 'font-medium font-[OAGothic-M]'"
                        class="text-[#444] text-sm ">
                        B 찍먹
                    </p>
                    <p :class="aCount < bCount ? 'font-extrabold ' : 'font-medium font-[OAGothic-M]'" class="text-primary">
                        {{ bCount }}</p>
                </div>
            </div>

            <!-- 팝업 -->
            <div class="relative mb-5" :class="this.popUp ? 'block' : 'hidden'">
                <button type="button" @click="openModal"
                    class="bg-primary rounded-3xl flex justify-center border-[#444] border items-center gap-2.5 w-[153px] py-3 shadow-[0px 3px 0px] shadow drop-shadow-[0_3px_0px_rgba(0,0,0)]">
                    <p class="text-white text-base font-extrabold">
                        공유하기
                    </p>
                    <img class="w-[18px] h-[20px]" src="/icons/share.png" />
                </button>
            </div>
            <div class="w-full h-[50px] bg-slate-300" :class="this.popUp ? 'block' : 'hidden'">
                광고박스
            </div>
        </div>
    </section>

    <!-- 팝업 -->
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-70" />
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full max-w-[480px] w-full mx-auto items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md flex flex-wrap justify-center items-center gap-5  relative border-primary border-[3px]  transform px-5 pt-8 pb-5 rounded-[20px] bg-white text-left align-middle shadow-xl transition-all">
                            <button type="button"
                                class="flex justify-center items-center z-10 right-2.5 -top-5 p-2.5 bg-primary rounded-full absolute"
                                @click="closeModal">
                                <img class="w-[20px] h-[20px]" src="/icons/close.png" />
                            </button>
                            <div class="w-full flex justify-center items-center gap-5">
                                <img class="w-[30px] h-[30px]" src="/icons/kakao.png" />
                                <img class="w-[30px] h-[30px]" src="/icons/twit.png" />
                                <img class="w-[30px] h-[30px]" src="/icons/face.png" />
                            </div>
                            <div class="border-[#ddd] flex justify-between items-center rounded-xl p-1.5 border w-full">
                                <p class="text-[#999] font-normal p-2.5 font-[Roboto] text-sm">
                                    {{ pageUrl }}
                                </p>
                                <div @click="this.linkShare"
                                    class="rounded-md flex justify-center items-center bg-primary w-[105px] text-white gap-2 p-2.5">
                                    링크복사
                                    <img class="w-[13px] h-[15px]" src="/icons/copy.png" />
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import useStore from '@/_stores';

export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    },
    data() {
        return {
            isOpen: ref(false),
            pageUrl: '',
            choiseA: false,
            choiseB: false,
            popUp: false,
            aCount: 0,
            bCount: 0,
        }
    },
    methods: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        },
        onCheck(check) {
            if (check == 'a') {
                this.onCount(1);
                this.choiseA = true;
                this.choiseB = false;
                this.getACount();
            }
            else {
                this.onCount(2);
                this.choiseA = false;
                this.choiseB = true;
                this.getBCount();
            }
        },
        linkShare(id) {
            let url = '';
            const textarea = document.createElement("textarea");
            document.body.appendChild(textarea);
            url = window.location.href;
            textarea.value = url;
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert('주소를 복사하였습니다');
        },
        onUrl() {
            this.pageUrl = window.location.href;
        },
        onPop() {
            this.popUp ? this.popUp = false : this.popUp = true;
        },
        getACount() {
            const store = useStore();
            store.getByCount(1).then((response) => {
                if (response.data.CODE == 200) {
                    this.aCount = response.data.BODY;
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        getBCount() {
            const store = useStore();
            store.getByCount(2).then((response) => {
                if (response.data.CODE == 200) {
                    this.bCount = response.data.BODY;
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        onCount(type) {
            const store = useStore();
            store.onChoise(type).then((response) => {
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.onUrl();
        this.getACount();
        this.getBCount();
    }
};
</script>