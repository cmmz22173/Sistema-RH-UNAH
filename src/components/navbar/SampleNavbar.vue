<template>
  <nav class="navbar navbar-expand-lg " id="NavbarMain">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#" style="padding-left: 1rem">RH-UNAH</a>



    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="/menu">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#"></a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: "SampleNavbar"
}
</script>

<style scoped>
.navbar{
  padding-left: 2rem;
  background-color: #ffbf00;
}
.nav-link:hover{
  transition: 0.2s;
  transform: scale(1.05);
}
</style>