// This is so we can map `nightly` (from the release dropdown) to the `main`
// branch, and `YY.M` -> `release-YY.M`.
// We did consider using the `page-origin-branch` attribute, but that appears to
// point to the branch where the page lives, which is not always what we want.

module.exports = (pageInfo) => {
  console.log(pageInfo)
  return pageInfo.version === 'nightly' ? 'main' : `release-${pageInfo.version}`
}
