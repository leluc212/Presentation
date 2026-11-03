<template>
  <footer
    v-if="!['cover', 'section', 'end'].includes($nav.currentLayout)"
    class="lpc-footer"
  >
    <div class="lpc-progress">
      <div class="lpc-progress-bar" :style="{ width: (($nav.currentPage / $nav.total) * 100) + '%' }" />
    </div>
    <div class="lpc-footer-row">
      <span>Báo cáo tiến độ · Tuần 1 &amp; 2 · Linux → Kubernetes</span>
      <span>{{ $nav.currentPage }} / {{ $nav.total }}</span>
    </div>
  </footer>
</template>

<style>
.lpc-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 26px;
  background: #f6f7fb;
}
.lpc-progress {
  height: 3px;
  background: #e6e8f0;
}
.lpc-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #5b6cff, #14a39a);
  border-radius: 0 3px 3px 0;
}
.lpc-footer-row {
  height: 23px;
  padding: 0 2.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  color: #9aa1b5;
}
</style>
