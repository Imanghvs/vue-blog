<template>
    <div class="DefaultLayout flex flex-col place-self-center">
        <nav class="bg-white border-gray-200 border-b">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <img src="/frog-favicon.jpg" class="h-8 mr-3" alt="Frog Logo">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">Frog Blog</span>
                </a>
            </div>
        </nav>
        <slot class="mt-8" />
    </div>
</template>