var vue = new Vue({
    el: '#app',
    data: {
      formOpen: false,
      productData: {
        title: '',
        rating: '',
        price: '',
        list_price: '',
        is_featured: false
      }
    },
    methods: {
      resetForm: function () {
        this.productData = {
          title: '',
          rating: '',
          price: '',
          list_price: '',
          is_featured: false
        }
      },
      cancel: function() {
        this.formOpen = false;
        this.resetForm();
      }
    }
  })