import gsap from 'gsap';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { IdClient, NameClient } from '../types/generalTypes';

// Компонуемый файл хранит переиспользуемую логику для работы contentBlockComp компонента
function useContentBlock() {
    const route = useRoute();

    const isShowContentBlock = ref<boolean>(false);
    const currentItemName = ref<null | NameClient>(null);
    const currentItemID = ref<IdClient | null>(null);

    // Проявление контент блока по нажатию на item в списке items
    function changeContentBlock(id: IdClient, itemName: NameClient): void {
        currentItemID.value = id;
        currentItemName.value = `${itemName} ${id}`; // !!! ${id} Только для ТЕСТА!!!
        isShowContentBlock.value = true;
        const contentBlock = document.querySelector('.hospital-beds-main__content-block') as HTMLDivElement;
        gsap.to(contentBlock, { scale: 1, duration: 0.5 });
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
        currentItemName,
        currentItemID,
        isShowContentBlock,
        changeContentBlock,
    }
}

export default useContentBlock;