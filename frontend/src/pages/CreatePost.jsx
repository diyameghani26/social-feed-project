
import React from 'react'

const CreatePost = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      {/* Card */}
      <section className="w-full max-w-2xl bg-white rounded-4xl shadow-xl p-12 m-3">

        {/* Heading */}
        <h1 className=" font-sans text-4xl font-bold text-center text-gray-800 ">
          Create Post
        </h1> 
        <p className="text-gray-500 text-center text-base mt-3 mb-8">
          Share your next curated moment with the feed.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-6">

          {/* Upload Box */}
          <label className="cursor-pointer">
            <div className="h-75 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition">
              <div className="text-center">
                <p className="text-lg font-medium text-gray-700">
                  Choose Image
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  High-resolution PNG or JPG (Max 10MB)
                </p>
              </div>
            </div>

            <input 
              type="file" 
              name="image" 
              accept="image/*" 
              className="hidden"
            />
          </label>
          {/* Caption */}
          <textarea 
            name="caption" 
            required 
            placeholder="Enter caption..."
            rows={4}
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base resize-none"
          />

          {/* Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition shadow-md"
          >
            Post
          </button>

          {/* Bottom Options */}
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span className="hover:text-gray-600 cursor-pointer">Add Location</span>
            <span className="hover:text-gray-600 cursor-pointer">Tag People</span>
          </div>

        </form>
      </section>
    </div>
  )
}

export default CreatePost
git add .