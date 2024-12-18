export default function AppHeader({ searchQuery, handleInput, handleSubmit }) {
  return (
    <header className="fixed-top">
      <div className="input-search p-4 d-flex align-items-center justify-content-between">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div className="d-flex align-items-center">
          <input
            className="form-control w-auto"
            id="input-boolflix"
            value={searchQuery}
            onChange={handleInput}
            type="text"
            placeholder="Cerca film o serie TV..."
          />
          <div className="ps-4">
            <button
              type="submit"
              className="button ms-2"
              onClick={handleSubmit}
            >
              Cerca
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
