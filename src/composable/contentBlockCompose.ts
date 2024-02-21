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
        currentItemName.value = itemName;
        isShowContentBlock.value = true;
        const contentBlock = document.querySelector('.hospital-beds-main__content-block') as HTMLDivElement;
        gsap.to(contentBlock, { scale: 1, duration: 0.5 });
    }

    // На основе query параметра вычисляет название элемента который был открыт до перемонтирования компонента
    function saveTitleContentBlock(itemsArray: Array<any>) {
        try {
            if(route.query.select) {
                itemsArray.forEach((item) => {
                    // В случае соответствия элемента массива query параметру, снова записываем данные элемента 
                    if(item.id == route.query.select) {
                        currentItemName.value = item?.name;
                        currentItemID.value = item?.id;
                    }
                });
            }
        } catch (err) {
            throw new Error(`composable/contentBlockCompose: saveTitleContentBlock  => ${err}`);
        }
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
        saveTitleContentBlock,
    }
}

export default useContentBlock;