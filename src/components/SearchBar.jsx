import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
            <input data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
            Mostrar somente favoritos
            <input data-testid="checkbox-input" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label data-testid="select-input-label" htmlFor="select-input">
            Filtrar por gênero
            <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
