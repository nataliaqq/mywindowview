<template>
   <v-row>
        <v-col cols="12">
            <p>Добро пожаловать. Меня зовут Наташа, и я собираю виды из окна, которые фотографирую во время поездок и дома.</p>

            <p>Hello. My name is Natasha and this is my collection of window’s view from my travelling.</p>

            <p>Social: <a :href="links.fb">FB</a> | <a :href="links.insta">Insta</a></p>

            <p>Email me something good: <a :href="`mailto:${links.email}`">{{ links.email }}</a></p>
        </v-col>
   </v-row>
</template>

<script>
export default {
    data () {
        return {
            links: {
                fb: 'https://facebook.com/',
                insta: 'https://instagram.com/slonovaya',
                email: 'big.plavnik@gmail.com'
            }
        }
    }
    
}
</script>