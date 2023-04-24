<template>
  <svg id="loading-container-svg" viewBox="0 0 400 400" width="400" height="400">
    <use xlink:href="#loading-circle" />
  </svg>

  <svg style="display: none">
    <symbol id="loading-circle">
      <circle cx="225" cy="26" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="320" cy="72" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.1s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.1s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="371" cy="160" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.2s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.2s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="365" cy="260" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.3s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.3s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="305" cy="342" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.4s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.4s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="200" cy="375" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.5s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.5s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="95" cy="340" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.6s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.6s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="34" cy="255" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.7s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.7s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="37" cy="135" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.8s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.8s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="117" cy="45" r="0" fill="#3BDE7C" linejoin="round" fill-opacity="1">
        <animate
          attributeType="xml"
          attributeName="r"
          from="37"
          to="0"
          begin="0.9s"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeType="xml"
          attributeName="fill"
          from="#3BDE7C"
          to="rgba(255,255,255,0)"
          begin="0.9s"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </symbol>
  </svg>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => this.$router.push({ path: '/' }), 5000)
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 99%;
  margin: 0;
  padding: 0;
}

#loading-container-svg {
  height: 75px;
  width: 75px;
  display: block;
  margin: 15px auto;
  transform: scale(-1, 1);
  /*outline: 1px solid #00f;*/
}
</style>
