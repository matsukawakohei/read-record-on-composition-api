<template>
<div id="search">
    <!-- :はv-bindの省略記法 -->
    <!-- @はv-onの省略記法 -->
    <el-form :inline="true">
        <el-form-item label="キーワード">
            <el-input type="text" size="large" v-model="keyword"></el-input>
        </el-form-item>
        <el-form-item label="キーワード">
            <el-button type="primary" @click="onclick">検索</el-button>
        </el-form-item>
    </el-form>
    <hr />
    <BookInfo v-for="(book, i) of books"
        :linkable="true" :book="book" :index="i + 1" :key="book.isbn">
    </BookInfo>
</div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import BookInfo from '@/views/BookInfo.vue'

export default {
    name: 'BookSearch',
    components: {
        BookInfo
    },
    setup() {
        const app = getCurrentInstance()
        const $http = app.appContext.config.globalProperties.$http

        const keyword = ref('vue.js')
        const books = ref([])

        const onclick = () => {
            $http(`https://www.googleapis.com/books/v1/volumes?q=${keyword.value}`)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    books.value = []
                    for (let book of data.items) {
                        const authors = book.volumeInfo.authors
                        const price = book.saleInfo.listPrice
                        const img = book.volumeInfo.imageLinks
                        books.value.push({
                            id: book.id,
                            title: book.volumeInfo.title,
                            author: authors ? authors.join(',') : '',
                            price: price ? price.amount : '-',
                            publisher: book.volumeInfo.publisher,
                            published: book.volumeInfo.publishedDate,
                            image: img ? img.smallThumbnail : ''
                        })
                    }
                })
        }

        return {
            keyword,
            books,
            onclick
        }

    }
}
</script>

<style scoped>
#search form {
    margin-top: 15px;
}
</style>