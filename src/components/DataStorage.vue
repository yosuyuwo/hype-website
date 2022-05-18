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
              title: "NMD R1",
              subtitle: "Disney Pixar - Toy Story",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 2099000,
              stock: 10,
            },
            {
              title: "PW HU HOLI NMD MC",
              subtitle: "Pink Glow",
              type: "shoes",
              gender: "men",
              size: ["9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 5499000,
              stock: 10,
            },
            {
              title: "PW HU NMD NERD",
              subtitle: "N.E.R.D",
              type: "shoes",
              gender: "men",
              size: ["8", "10.5", "11.5", "12"],
              colours: ["#FFFFF"],
              price: 36099000,
              stock: 10,
            },
            {
              title: "PW HU NMD NERD",
              subtitle: "ComplexCon Exclusive 2018",
              type: "shoes",
              gender: "men",
              size: ["7", "7.5", "9.5"],
              colours: ["#FFFFF"],
              price: 21199000,
              stock: 10,
            },
            {
              title: "PHARRELL WILLIAMS SOLAR HU NMD",
              subtitle: "Solar Pack - M1L3L3",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 6099000,
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
              title: "AIR FORCE 1 LOW '07",
              subtitle: "White on White",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 1799000,
              stock: 10,
            },
            {
              title: "AIR FORCE 1 LOW",
              subtitle: "Supreme - Mini Box Logo White",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 2799000,
              stock: 10,
            },
            {
              title: "AIR MAX 1",
              subtitle: "Blueprint",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 3799000,
              stock: 10,
            },
            {
              title: "AIR FORCE 1 '07 WB",
              subtitle: "Flax",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 2499000,
              stock: 10,
            },
            {
              title: "AIR MAX 90 RETRO",
              subtitle: "Bacon 2021",
              type: "shoes",
              gender: "men",
              size: ["8", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 2699000,
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
              title: "AIR JORDAN 1 HIGH 85",
              subtitle: "Georgetown",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 6999000,
              stock: 10,
            },
            {
              title: "AIR JORDAN 1 HIGH OG",
              subtitle: "Brotherhood",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 3499000,
              stock: 10,
            },
            {
              title: "AIR JORDAN 1 MID SE",
              subtitle: "Coconut Milk",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 3399000,
              stock: 10,
            },
            {
              title: "AIR JORDAN 1 HIGH OG",
              subtitle: "Dark Marina Blue",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 3699000,
              stock: 10,
            },
            {
              title: "AIR JORDAN 1 RETRO HIGH OG",
              subtitle: "Bred Patent",
              type: "shoes",
              gender: "men",
              size: ["8", "8.5", "9", "9.5", "10"],
              colours: ["#FFFFF"],
              price: 5599000,
              stock: 10,
            },
          ],
        },
      ],
    };
  },
};
</script>
