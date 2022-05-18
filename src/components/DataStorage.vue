<script>
export default {
  mounted() {
    if (!localStorage.getItem("brands")) {
      localStorage.setItem("brands", JSON.stringify(this.brands));
    }
  },
  data() {
    return {
      brands: [
        {
          name: "adidas",
          video: {
            title: "IMPOSSIBLE IS NOTHING",
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
          name: "bape",
          video: {
            title: "BAPE® x COACH",
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
            title: "Best Day Ever",
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
            title: "Why Not?",
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
          name: "off-white",
          video: {
            title: '"Out of Office"',
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
          name: "stussy",
          video: {
            title: "Persona",
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
          name: "yeezy",
          video: {
            title: "Dream. Create. Conquer.",
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
