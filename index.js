const uvlfile = document.getElementById("uvlfile");

function showLoading(){
	document.getElementById("loading").style.display = "initial";
}
function hideLoading(){
	document.getElementById("loading").style.display = "none";

}

/*
async function valid() {
    //This call directly to the function that shows the loding gif in the page
	showLoading()
    //Lets load pyodide, a full wasm compatible kernel for python
    let pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");
    
    //Now we install our custom wheels for antlr4 so its wasm compatible
	await micropip.install("http://localhost:8000/files/antlr4_python3_runtime-4.13.1-py3-none-any.whl");
    
    //Let's install Flama starting with the uvlparser==1.0.2
    await micropip.install("uvlparser==1.0.2");
    await micropip.install("flamapy-fm");
    await micropip.install("flamapy-sat");
	
    //This function installs the flamapy-fm distribution but without its dependencies as fire wont work on wasm
    //Note that the code of python has a different identation to avoid problems with tabs.
    await pyodide.runPythonAsync(`
import micropip
await micropip.install("flamapy-fm-dist", deps=False)#this is to avoid problems with deps later on
`)
	//This call directly to the function that hides the loding gif in the page
    hideLoading()
    //Now we are executing the python code. 
	try {
    let output = pyodide.runPython(
`
import js

file_content = js.document.getElementById('uvlfile').value
div = js.document.createElement("result")

with open("uvlfile.uvl", "w") as text_file:
    print(file_content, file=text_file)

from flamapy.interfaces.python.FLAMAFeatureModel import FLAMAFeatureModel

fm = FLAMAFeatureModel("uvlfile.uvl")
result=fm.valid()

div.innerHTML = "<div id='deleteme'>"+str(result)+"</div>"
exists=js.document.getElementById('deleteme')
if(exists):
	exists.remove()

js.document.getElementById('result').append(div)
`
);
    } catch (err) {
        console.log(err);
    }
}
*/

 async function products() {
    //This call directly to the function that shows the loding gif in the page
	showLoading()
    //Lets load pyodide, a full wasm compatible kernel for python
    let pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");
    
    //Now we install our custom wheels for antlr4 so its wasm compatible
	// await micropip.install("http://localhost:8000/files/antlr4_python3_runtime-4.7.2-py3-none-any.whl");
    // await micropip.install("http://localhost:8000/files/antlr4_python3_runtime-4.13.1-py3-none-any.whl");
    
    //Let's install Flama starting with the uvlparser==1.0.2
    await micropip.install("uvlparser==1.0.2");
    await micropip.install("flamapy-fm");
    await micropip.install("flamapy-sat");
	
    //This function installs the flamapy-fm distribution but without its dependencies as fire wont work on wasm
    //Note that the code of python has a different identation to avoid problems with tabs.
    await pyodide.runPythonAsync(`
import micropip
await micropip.install("flamapy-fm-dist", deps=False)#this is to avoid problems with deps later on
`)
	//This call directly to the function that hides the loding gif in the page
    hideLoading()
    //Now we are executing the python code. 
	try {
    let output = pyodide.runPython(
`
import js

file_content = js.document.getElementById('uvlfile').value
div = js.document.createElement("result")

with open("uvlfile.uvl", "w") as text_file:
    print(file_content, file=text_file)

from flamapy.interfaces.python.FLAMAFeatureModel import FLAMAFeatureModel

fm = FLAMAFeatureModel("uvlfile.uvl")
result=fm.products()
result = "<br>".join([f'P({i}): {p}' for i, p in enumerate(result, 1)])
div.innerHTML = "<div id='deleteme'>"+str(result)+"</div>"
exists=js.document.getElementById('deleteme')
if(exists):
	exists.remove()

js.document.getElementById('result').append(div)
    `);
    } catch (err) {
        console.log(err);
    }
}

/*
 async function numberofproducts() {
    //This call directly to the function that shows the loding gif in the page
	showLoading()
    //Lets load pyodide, a full wasm compatible kernel for python
    let pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");
    
    //Now we install our custom wheels for antlr4 so its wasm compatible
	//await micropip.install("http://localhost:8000/files/antlr4_python3_runtime-4.13.1-py3-none-any.whl");
    await micropip.install("http://localhost:8000/files/antlr4_python3_runtime-4.7.2-py3-none-any.whl");
    
    //Let's install Flama starting with the uvlparser==1.0.2
    await micropip.install("uvlparser==1.0.2");
    await micropip.install("flamapy-fm");
    await micropip.install("flamapy-sat");
	
    //This function installs the flamapy-fm distribution but without its dependencies as fire wont work on wasm
    //Note that the code of python has a different identation to avoid problems with tabs.
    await pyodide.runPythonAsync(`
import micropip
await micropip.install("flamapy-fm-dist", deps=False)#this is to avoid problems with deps later on
`)
	//This call directly to the function that hides the loding gif in the page
    hideLoading()
    //Now we are executing the python code. 
	try {
    let output = pyodide.runPython(
`
import js

file_content = js.document.getElementById('uvlfile').value
div = js.document.createElement("result")

with open("uvlfile.uvl", "w") as text_file:
    print(file_content, file=text_file)

from flamapy.interfaces.python.FLAMAFeatureModel import FLAMAFeatureModel

fm = FLAMAFeatureModel("uvlfile.uvl")
result=fm.products_number()

div.innerHTML = "<div id='deleteme'>"+str(result)+"</div>"
exists=js.document.getElementById('deleteme')
if(exists):
	exists.remove()
js.document.getElementById('result').append(div)
    `);
    } catch (err) {
        console.log(err);
    }
}
*/