const coupon = document.getElementById("coupon");
const noThanks = coupon.querySelector("#no-thanks");

document.getElementById("coupon-close").addEventListener("click", () => {
  coupon.style.display = "none";
});

document.getElementById("reveal-code").addEventListener("click", () => {
  document.getElementById("reveal-code").style.display = "none";
});

document.addEventListener("DOMContentLoaded", (event) => {
  noThanks.addEventListener("click", () => {
    document.cookie = "hideCoupon=true; max-age=604800";
    coupon.style.display = "none";
  });

  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("hideCoupon="))
  ) {
    coupon.style.display = "none";
  }
});
