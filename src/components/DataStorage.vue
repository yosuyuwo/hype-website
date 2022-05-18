<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      brands: [
        {
          name: "adidas",
          video: {
            title: "adi",
          },
          products: [
            {
              title: "titel",
              subtitle: "subtitel",
              type: "shoes",
              gender: "men",
              size: ["8"],
              colours: ["#FFFFF"],
              price: 100000,
              stock: 10,
            },
          ],
        },
        {
          name: "nike",
          video: {
            title: "adi",
          },
          products: [
            {
              title: "titel",
              subtitle: "subtitel",
              type: "shoes",
              gender: "men",
              size: ["8"],
              colours: ["#FFFFF"],
              price: 100000,
              stock: 10,
            },
          ],
        },
        {
          name: "jordan",
          video: {
            title: "adi",
          },
          products: [
            {
              title: "titel",
              subtitle: "subtitel",
              type: "shoes",
              gender: "men",
              size: ["8"],
              colours: ["#FFFFF"],
              price: 100000,
              stock: 10,
            },
          ],
        },
      ],
    };
  },
};
</script>
