<template>
  <v-row>
    <v-col>
      <v-row justify="center" class="mt-16">
        <v-col cols="12" md="6">
          <h1 class="title">
            Please contact the office or your sales representative for new and
            upcoming door styles and finishes.
          </h1>
        </v-col>
        <v-col cols="12" md="3"></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field outlined v-model="name" placeholder="Name" name="name"/>
            </v-col>
            <v-col cols="12" md="6" class="pt-0">
              <v-text-field outlined v-model="email" placeholder="Email" name="email" />
            </v-col>
          </v-row>
          <v-text-field outlined v-model="location" placeholder="Location" name="city" />
          <v-textarea outlined v-model="message" placeholder="Message" name="message" />
          <v-btn large outlined color="primary">Submit</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <h2 class="title">More Info</h2>
          <p>
            Please contact us with any questions or for more information about
            our products.
          </p>
          <h2 class="title">Factory/Corporate Headquarters:</h2>
          <p class="mb-0">3501 West Bavaria St.</p>
          <p>Eagle, ID 83646</p>
          <h2 class="title">Phone:</h2>
          <p>(208)-274-8000</p>
          <h2 class="title">Business Hours:</h2>
          <p>M-F 8am – 6:30pm MST</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-0 mt-16 pb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23090.30420869273!2d-116.40753802885564!3d43.66297802435653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae54b7bc584f07%3A0x134a2c59acdb9012!2s3501%20W%20Bavaria%20St%2C%20Meridian%2C%20ID%2083646!5e0!3m2!1sen!2sus!4v1659791958692!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      location: null,
      message: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
