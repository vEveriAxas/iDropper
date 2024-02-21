import gsap from 'gsap';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Компонуемый файл хранит переиспользуемую логику для работы contentBlockComp компонентом
function useContentBlock() {
    const route = useRoute();

    const isShowContentBlock = ref<boolean>(false);

    // Проявление контент блока по нажатию на item в списке items
    function changeContentBlock(): void {
        isShowContentBlock.value = true;
        gsap.to('.hospital-beds-main__content-block', { scale: 1, duration: 0.5 })
    }

    // Проверяется выбран ли query параметр элемента при монтировании компонента
    onMounted(() => {
        if(route.query.select) {
            isShowContentBlock.value = true;
            const contentBlock = document.querySelector('.hospital-beds-main__content-block') as HTMLDivElement;
            contentBlock.style.scale = '1';
        }
    });

    return {
        isShowContentBlock,
        changeContentBlock,
    }
}

export default useContentBlock;