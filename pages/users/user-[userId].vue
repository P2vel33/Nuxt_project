<script setup>
definePageMeta({
  layout: "users",
});
const { userId } = useRoute().params;

const { data } = await useFetch(`https://dummyjson.com/users/${userId}`);
</script>

<template>
  <h1 class="text-danger mb-4">ID of user: {{ userId }}</h1>
  <Row align-items="center" justify-content="center" gutter="x-3">
    <Col col="md-5">
      <Card
        data-aos="fade-up"
        background-color="primary-subtle"
        border-subtractive
        text-alignment="center"
        shadow
      >
        <CardBody>
          <Row align-items="center" justify-content="center" gutter="x-5">
            <Col col="md-11">
              <h3>User photo</h3>
              <b-img fluid rounded :src="data.image" alt="Image Description" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>

    <Col col="md-5">
      <h2>{{ data.firstName }} {{ data.lastName }}</h2>
      <p>ID: {{ data.id }} | Age: {{ data.age }}</p>

      <ListGroup unstyled font-size="5" flush>
        <ListGroupItem><strong>Email:</strong> {{ data.email }} </ListGroupItem>
        <ListGroupItem><strong>Phone:</strong> {{ data.phone }} </ListGroupItem>
        <ListGroupItem
          ><strong>Address:</strong> {{ data.address.address }},{{
            data.address.city
          }},{{ data.address.state }}
        </ListGroupItem>
        <ListGroupItem
          ><strong>Company:</strong> {{ data.company.name }} -
          {{ data.company.title }}
          <p>Department: {{ data.company.department }}</p>
        </ListGroupItem>
      </ListGroup>
    </Col>
  </Row>
</template>

<style>
h1 {
  color: red;
}
</style>
