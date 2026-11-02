<template>
  <footer
    v-if="!['cover', 'section', 'end'].includes($nav.currentLayout)"
    class="lpc-footer"
  >
    <span>Báo cáo tiến độ · Tuần 1 &amp; 2 · Linux → Kubernetes</span>
    <span>{{ $nav.currentPage }} / {{ $nav.total }}</span>
  </footer>
</template>

<style>
.lpc-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 26px;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  color: #94a3b8;
  border-top: 1px solid #e2e8f0;
  background: #fbfcfe;
}
</style>
