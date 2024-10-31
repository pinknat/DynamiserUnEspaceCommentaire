let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const message = document.getElementById("message").value;
const errorMessage = document.getElementById("error-message");

if (firstName ==="" || lastName ==="" || message ===""){
    errorMessage.style.display = "block";
 }

let commentList=document.getElementById("comment-list");
let newComment =`
    <div class="flex space-x-4 text-sm text-gray-500">
        <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${message}</p>
            </div>
        </div>
`;
commentList.innerHTML += newComment;

form.reset();

});
