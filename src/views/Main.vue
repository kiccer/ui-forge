<script setup>
import Menu from '@/components/local/Menu.vue'

</script>

<template>
    <header>
        <div class="logo">
            Logo
        </div>
    </header>

    <div class="container">
        <Menu
            class="nav"
        />

        <div class="content">
            <main>
                <RouterView />
            </main>

            <footer>
                kiccer@2024-{{ new Date().getFullYear() }} All rights reserved.
            </footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$header-height: 60px;
$footer-height: 40px;
$nav-width: 200px;

header {
    height: $header-height;
    background-color: #333;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    .logo {
        width: $nav-width;
        line-height: $header-height;
        text-align: center;
        font-size: 20px;
        background-color: #111;
    }
}

.container {
    display: flex;
    height: calc(100vh - #{$header-height});

    .nav {
        width: $nav-width;
        background-color: #fff;
        padding-top: 20px;
        position: fixed;
        top: $header-height;
        bottom: 0;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: calc(100vh - #{$header-height});
        margin-top: $header-height;
        margin-left: $nav-width;

        main {
            padding: 16px;
            flex: 1;
        }

        footer {
            height: $footer-height;
            background-color: #333;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

</style>
