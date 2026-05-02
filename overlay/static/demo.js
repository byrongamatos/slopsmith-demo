(function () {
  if (!window.SLOPSMITH_DEMO) return;
  window.slopsmithDemoTrack = function (event) {
    if (typeof window.goatcounter === 'undefined') return;
    window.goatcounter.count({ path: event, title: event, event: true });
  };
})();
