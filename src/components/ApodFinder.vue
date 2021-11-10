<template>
    <form @submit.prevent="search" class="bg-white rounded elevation-1">
        <div class="form-group d-flex align-items-center">
            <label for="search" class="sr-only"></label>
            <input v-model="query" type="text" name="search" required class="form-control bg-white border-0"
                placeholder="search" />
            <button class="btn px-2 py-0" type="submit">
                <i class="mdi mdi-globe-americas f-18"></i>
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        setup() {
            const query = ref('')
            return {
                query,
                async search() {
                    try {
                        await apodSearchService.findApodByQuery(query.value)
                    } catch (error) {
                        logger.error(error)
                        Pop.toast(error.message, 'error')
                    }
                }
            }
        }
    }
</script>