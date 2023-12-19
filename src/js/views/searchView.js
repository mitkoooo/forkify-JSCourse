class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    return this._parentElement.querySelector(".search__field").value;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();

      handler();
      this._clearInput();
    });
  }

  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
