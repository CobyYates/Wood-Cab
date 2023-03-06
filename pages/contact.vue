<template>
  <v-row>
    <v-col>
      <v-row justify="center" class="py-16">
        <v-col cols="12" md="6">
          <h1 class="mb-10 title">Please use the contact form to request more information</h1>
          <v-form
            @submit.prevent="valid ? submit : validate"
            v-model="valid"
            ref="form"
          >
            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  outlined
                  v-model="first"
                  label="First Name"
                  name="firstname"
                  :rules="firstRules"
                />
              </v-col>
              <v-col cols="12" md="6" class="pt-0">
                <v-text-field
                  outlined
                  v-model="last"
                  label="Last Name"
                  name="lastname"
                  :rules="lastRules"
                />
              </v-col>
            </v-row>
            <v-text-field
              outlined
              v-model="phone"
              label="Phone Number"
              name="phone"
              type="tel"
              :rules="phoneNumberRule"
              @input="acceptNumber"
            />
            <v-text-field
              outlined
              v-model="email"
              label="Email"
              name="email"
              :rules="emailRules"
            />
            <v-radio-group v-model="contactMethod" row class="mt-0">
              <label>Preferred method of contact: </label>
              <v-radio label="Phone" value="phone"></v-radio>
              <v-radio label="Email" value="email"></v-radio>
            </v-radio-group>
            <v-row>
              <v-col>
                <v-text-field
                  outlined
                  v-model="business"
                  label="Business Name"
                  name="business"
                  :rules="businessRules"
                />
              </v-col>
              <v-col>
                <v-select
                  outlined
                  v-model="business"
                  label="Which best describes your business"
                  name="business"
                  :items="businessType"
                  :menu-props="{ bottom: true, offsetY: true }"
                />
              </v-col>
            </v-row>
            <v-textarea
              outlined
              v-model="message"
              :rules="messageRules"
              label="Message"
              name="message"
            />
            <v-btn large outlined color="primary">Submit</v-btn>
          </v-form>
        </v-col>
        <v-col cols="12" md="3">
          <h2 class="title">More Info</h2>
          <p>
            Please contact us with any questions or for more information about
            our products.
          </p>
          <h2 class="title">Wood Cab Factory:</h2>
          <p class="mb-0">6283 S. Valley View Blvd. | Suite J</p>
          <p>Las Vegas, NV 89118</p>
          <h2 class="title">Office:</h2>
          <p>(702) 803-1201</p>
          <h2 class="title">Business Hours:</h2>
          <p>M-F 8am – 6:30pm MST</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      valid: false,
      first: null,
      last: null,
      phone: null,
      email: null,
      business: null,
      contactMethod: null,
      message: null,
      firstRules: [(v) => !!v || "First name is required"],
      lastRules: [(v) => !!v || "Last name is required"],
      businessRules: [(v) => !!v || "Business is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      messageRules: [(v) => !!v || "Message is required"],
      businessType: [
        "Architect",
        "Builder",
        "Building Materials Supplier",
        "Distributor or Wholesaler",
        "Home Center or Hardware Store",
        "Interior Designer or Kitchen Design Consultant",
        "Kitchen & Bath Dealer/Showroom",
        "Other",
      ],
    };
  },
  computed: {
    phoneNumberRule() {
      const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
      return [
        (v) => !!v || "Phone number is required",
        (v) =>
          regex.test(v) || "Phone number must be in the format (123) 456-7890",
      ];
    },
  },
  methods: {
    validate() {
      let result = this.$refs.form.validate();
      if (result) this.submit();
    },
    acceptNumber() {
      var x = this.phone
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phone = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    submit() {
      let data = document.querySelector("form");
      emailjs
        .sendForm(
          "service_tzx74ns",
          "template_imnlwnv",
          data,
          "NILnSqkxVCEun1-US"
        )
        .then(
          (result) => {
            if (result.status == 200) this.sent = true;
          },
          (error) => {
            if (error) {
              this.error = "Message Failed to Send";
            }
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped></style>
