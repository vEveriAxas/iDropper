import { HospitalClient } from '../types/hospitalType';
import { getAllHospitalDB } from '../api/hospitalsApi';
import { ref } from 'vue';


// Компонуемый файл для загрузки данных для фильтр панели
function useLoadingFilterData() {

    // =================  DATA  ===================

    // Списки доступных элементов для селект-меню
    const availableHospitals = ref<Array<string>>([]);

    // =================  METHODS  ===================

    // Функция получет список больниц доступных пользователю для записи их имен в Select-menu Фильтр-панели
    async function loadItemsHospital() {
        try {
            const responsedHospitals = await getAllHospitalDB();
            responsedHospitals.forEach((item: HospitalClient) => {
                if (item.name) {
                    availableHospitals.value.push(item.name);
                } else {
                    availableHospitals.value.push('not_available_name');
                }
            });
        } catch (err) {
            throw new Error(`composable/loadingFilterData: loadItemsHospital  => ${err}`);
        }
    }


    return {
        availableHospitals,

        loadItemsHospital,
    }
}

export default useLoadingFilterData;