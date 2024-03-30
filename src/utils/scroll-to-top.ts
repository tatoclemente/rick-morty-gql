

interface Props {
  smooth?: boolean;
}

export const scrollToTop = ( smooth: Props ) => {
  if (!smooth) {
    window.scrollTo(0, 0);
    return;
  }
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return;

}