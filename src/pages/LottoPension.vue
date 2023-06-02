<template>
    <div class="overflow-hidden">
        <div class="text-[#444] dark:text-white text-sm font-extrabold text-center mt-1.5">
            <span class="text-[#FF785A]">Q. </span>복권 15억 받기? 연금 월 625만 원씩 20년 받기?
        </div>
        <section class="flex justify-center items-center mt-8 gap-1.5">
            <aside class="w-[150px] flex-wrap flex justify-center">
                <div @click="this.onCheck('a'), clickAnimation('.item1')" class="relative item1">
                    <div :class="this.choiseA ? 'bg-[#FF785A80] z-10 flex justify-center items-center rounded-[20px] border-black border-t-2 border-x border-b-4 absolute' : 'hidden'"
                        class="w-[126px] h-[126px]">
                        <img class="w-[50px] h-[50px]" src="/icons/Checkmark.png" />
                    </div>
                    <img class="w-[126px] h-[126px] rounded-[20px]" src="/img/lotto.png" />
                </div>
                <p class="font-extrabold m-2.5 text-center text-base text-[#444] dark:text-white">
                    복권 <span class="text-[#FF785A]">15억</span><br /> 한 번에 받기
                </p>
            </aside>
            <img class="w-[50px] relative top-[-15px] h-[65px]" src="/img/common/vs.png" />
            <aside class="w-[150px] flex-wrap flex justify-center">
                <div @click="this.onCheck('b'), clickAnimation('.item2')" class="relative item2">
                    <div :class="this.choiseB ? 'bg-[#FF785A80] z-10 flex justify-center items-center rounded-[20px] border-black border-t-2 border-x border-b-4 absolute' : 'hidden'"
                        class="w-[126px] h-[126px]">
                        <img class="w-[50px] h-[50px]" src="/icons/Checkmark.png" />
                    </div>
                    <img class="w-[126px] h-[126px] rounded-[20px]" src="/img/pension.png" />
                </div>
                <p class="font-extrabold m-2.5 text-center text-base text-[#444] dark:text-white">
                    연금 <span class="text-[#FF785A]">월 625만 원</span><br />
                    20년 동안 받기
                </p>
            </aside>
        </section>
        <div class="text-[#444] text-[10px] text-center dark:text-white mt-5">
            *당신이 성향을 클릭하면 아래의 현황에서 확인할 수 있습니다.
        </div>

        <!-- 하단 팝업 -->
        <div class="overflow-hidden">
            <section
                class="foot result-box max-w-[500px] m-auto shadow-md border-primary border-4 rounded-t-[20px] bottom-0 absolute left-5 right-5 bg-white">
                <div @click="this.onPop"
                    class=" bg-primary rounded-full w-[40px] h-[40px] flex justify-center left-[calc(50%_-_20px)] -top-[20px] items-center absolute">
                    <img :class="this.popUp ? '' : 'rotate-180'" class="w-[20px]" src="/icons/arr-bottom.png" />
                </div>

                <div class="mt-12 flex flex-wrap justify-center ">
                    <div class="w-full px-5 mb-5 " :class="this.popUp ? 'block' : 'hidden'">
                        <div class="flex justify-between w-full">
                            <p :class="aCount > bCount ? 'font-extrabold ' : 'font-medium font-[OAGothic-M]'"
                                class="text-[#444] text-sm ">
                                복권 15억
                            </p>
                            <p :class="aCount > bCount ? 'font-extrabold ' : 'font-medium font-[OAGothic-M]'"
                                class="text-primary">
                                {{ aCount }}</p>
                        </div>
                        <div class="flex justify-between w-full">
                            <p :class="aCount < bCount ? 'font-extrabold ' : 'font-medium font-[OAGothic-M]'"
                                class="text-[#444] text-sm ">
                                연금 월 625만 원씩 20년
                            </p>
                            <p :class="aCount < bCount ? 'font-extrabold ' : 'font-medium font-[OAGothic-M]'"
                                class="text-primary">
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
                    <div class="w-full h-[50px] bg-slate-300 adsense" :class="this.popUp ? 'block' : 'hidden'">
                        <div id="adsgoeshere" v-html="adsenseContent"></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- 공유하기 팝업 -->
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
                                    <img @click="this.shareKakao()" class="w-[30px] h-[30px]" src="/icons/kakao.png" />
                                    <img @click="this.shareTwitter()" class="w-[30px] h-[30px]" src="/icons/twit.png" />
                                    <img @click="this.shareFacebook()" class="w-[30px] h-[30px]" src="/icons/face.png" />
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
    </div>
</template>

<script>
import { ref } from 'vue'
import $ from 'Jquery';

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
            popUp: true,
            aCount: 0,
            bCount: 0,
            adsenseContent: '',
            cnt: 1,
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
                this.onCount(3);
                this.choiseA = true;
                this.choiseB = false;
            }
            else {
                this.onCount(4);
                this.choiseA = false;
                this.choiseB = true;
            }
        },
        linkShare() {
            const textarea = document.createElement("textarea");
            document.body.appendChild(textarea);
            textarea.value = this.pageUrl;
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert('링크를 복사하였습니다');
        },
        shareFacebook() {
            window.open('http://www.facebook.com/sharer.php?u=' + this.pageUrl)
        },
        shareTwitter() {
            let sendText = "오늘의 논란종결";
            window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + this.pageUrl);
        },
        shareKakao() {
            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '오늘의 논란종결',
                    imageUrl: this.pageUrl,
                    link: {
                        mobileWebUrl: this.pageUrl,
                        webUrl: this.pageUrl,
                    },
                },
            })
        },
        onUrl() {
            this.pageUrl = window.location.href;
        },
        onPop() {
            this.popUp ? this.popUp = false : this.popUp = true;
        },
        getACount() {
            const store = useStore();
            store.getByCount(3).then((response) => {
                if (response.data.CODE == 200) {
                    this.aCount = response.data.BODY;
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        getBCount() {
            const store = useStore();
            store.getByCount(4).then((response) => {
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
                this.getACount();
                this.getBCount();
            }).catch((error) => {
                console.log(error);
            });
        },
        refreshCount() {
            this.getACount();
            this.getBCount();
            setTimeout(function () { // 3초 반복
                this.refreshCount();
            }.bind(this), 3000);
        },
        clickAnimation (item){
          var cnt = this.cnt++
          $(item).append(
              "<span class='cnt"+cnt+"'>+1</span>"
          );
          setTimeout(function() {
            console.log(".cnt"+cnt)
            $(".cnt"+cnt).remove();
          }, 1000);
        },
    },
    mounted() {
        this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
        this.onUrl();
        this.getACount();
        this.getBCount();
        this.refreshCount();
    }
};
</script>
