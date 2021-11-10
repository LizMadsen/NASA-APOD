<template>
    <div class="search-page container-fluid">
        <div class="row my-3">
            <div class="col-8">
                <Astro-Finder />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button @click="getRandom">Get a random APOD</button>
            </div>
            <!-- <div class="col-sm-6 col-md-4 col-lg-3" v-for="m in movies" :key="m.id">
                <!-- Props passed to child with bound attribute -->
            <Movie :movie="m" /> -->
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const apod = AppState.results
            return {
                apod
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>