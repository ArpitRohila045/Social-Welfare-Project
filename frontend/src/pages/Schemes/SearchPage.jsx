import { schemes } from './schemes'
import { useSearchParams } from 'react-router-dom'

export const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const selectedCategory = searchParams.get('category') || ''
    const searchQuery = searchParams.get('q') || ''

    // Flatten schemes
    const allSchemes = schemes.flatMap(({ schemes }) => schemes)

    // Unique categories
    const categories = [...new Set(allSchemes.map(s => s.category))]

    // Filtered schemes
    const filteredSchemes = allSchemes.filter((scheme) => {
        const matchesCategory = selectedCategory
            ? scheme.category === selectedCategory
            : true

        const matchesSearch = scheme.scheme_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())

        return matchesCategory && matchesSearch
    })

    // Update URL safely
    const updateParams = (params) => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev)
            Object.entries(params).forEach(([key, value]) => {
                if (!value) newParams.delete(key)
                else newParams.set(key, value)
            })
            return newParams
        })
    }

    return (
        <div className="flex min-h-screen bg-gray-50">

            {/* Sidebar */}
            <aside className="w-fit bg-white border-r border-gray-200">
                <div className="p-12 h-full flex flex-col">

                    <h3 
                        className="text-lg font-bold mb-4">
                        Explore Categories
                    </h3>

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search schemes..."
                        value={searchQuery}
                        onChange={(e) =>
                            updateParams({ q: e.target.value })
                        }
                        className="
                            mb-4
                            px-3 py-2
                            text-sm
                            border rounded-md
                            focus:ring-2 focus:ring-blue-500
                        "
                    />

                    <div className=" bg-zinc-300 h-[1px] my-2"></div>

                    {/* Categories */}
                    <div className="space-y-2 overflow-y-auto">
                        <button
                            onClick={() => updateParams({ category: null })}
                            className={`text-md font-semibold text-left ${
                                !selectedCategory
                                    ? 'font-bold text-blue-600'
                                    : 'text-gray-700'
                            }`}
                        >
                            All Categories
                        </button>

                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() =>
                                    updateParams({ category })
                                }
                                className={`text-md block font-semibold text-left ${
                                    selectedCategory === category
                                        ? 'font-bold text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                
                <h2>Home Schemes Search</h2>
                <h2 className="text-xl font-bold mb-6">
                    {selectedCategory || 'All Schemes'}
                </h2>

                {filteredSchemes.length === 0 && (
                    <p className="text-gray-500">
                        No schemes found.
                    </p>
                )}

                <div 
                    className="grid grid-cols-1 gap-6"
                >
                    {filteredSchemes.map((scheme) => (
                        <div
                            key={scheme.slug}
                            className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md hover:bg-gray-300"
                        >
                            <h3 className="text-lg font-semibold mb-1">
                                {scheme.scheme_name}
                            </h3>

                            <p className="text-sm text-gray-500 mb-2">
                                {scheme.state_or_ministry}
                            </p>

                            <p className="text-sm text-gray-700 line-clamp-3">
                                {scheme.details.description}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
