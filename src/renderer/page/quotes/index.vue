<template>

    <div class="content-wrapper">
        <div class="content-header">
            <ul class="y-tag">
                <router-link tag="li" to="/trade/general">
                    <a> 沪深 </a>
                </router-link>  
            </ul>
        </div>
        <router-view></router-view>
    </div>

</template>
<script>
export default {
  mounted: function() {
    var self = this;
  }
};
</script>