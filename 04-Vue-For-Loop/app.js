const app = Vue.createApp({
    template: `
    <ol>
      <!--<li v-for="gun in gunler">{{gun}}</li>-->
      <li v-for="person in persons">Çalışan: {{person.isim}} - Maaş: {{person.maas}}</li>
    </ol>
    `,
    data() {
      return {
        //gunler:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
        persons: [
          {isim:"Recep", maas:"25000"},
          {isim:"Ali", maas:"30000"},
          {isim:"Ayşe", maas:"35000"},
          {isim:"Sena", maas:"45000"}
        ]
      };
    },
    methods: {

    }
  });
  
  app.mount("#app");
  