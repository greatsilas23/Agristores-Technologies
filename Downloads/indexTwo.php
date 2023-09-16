<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Forms</title>
        <meta charset="utf-8">
        <meta name="author" content="greatsilas23">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="follow">
        <link rel="stylesheet" href="sty.css">
        <link class="addBorderCurve" rel="icon" href="./res/shelf.png">
    </head>
    <body onload="showTarget()">
        <div class="root">
            <div class="topSide" >
                <div class="leftNav" onclick="window.location.href = 'file:///home/silas/Desktop/Clones/financial-MS-/index.html'">
                    <img class="addBorderCurve backImage" alt="back" src="./res/back.png">
                </div>
                <div class="mainNav">
                    <div class="alignIconHomeResults" title="A library management system">
                        <img class="mainIconImage" src="./res/shelf.png" alt="icon">
                    </div>
                </div>
            </div>
            <div class="groupTablink addTopLeftCurve addTopRightCurve ">
                <table>
                    <tr>
                        <td>
                            <div id="availableLink" class="tablink availableLink" ><p>AVAILABLE </p></div>
                        </td>
                        <td>
                            <div id="addLink" class="tablink addLink" title="INSERT RECORDS" ><p>ADD </p></div>
                        </td>
                        <td>
                            <div id="borrowLink" class="tablink borrowLink"><p>BORROW </p></div>
                        </td>
                        <td>
                            <div id="returnLink" class="tablink returnLink"><p>RETURN </p></div>
                        </td>
                        <td>
                            <div id="overdueLink" class="tablink overdueLink" ><p>OVERDUE </p></div>
                        </td>
                        <td>
                            <div id="editLink" class="tablink editLink" ><p>EDIT</p></div>
                        </td>
                        <td>
                            <div class="tablink tablinkSearchBar"><input class="addBorderCurve searchBarElement" type="search" placeholder="search..."><img class="alignInSearchBar addBorderCurve" src="./res/search.png" width="20" height="20" alt="default"></div>
                        </td>
                        <td>
                            <div class="tablink tablinkProfile"><center><div class="roundEdgeComplete"><center><img src="./res/defaultUser.png" width="51" height="53" alt="default"></center></div></center>  </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="mainItems addBottomLeftCurve addBottomRightCurve ">
                <div class="sideAction arrangeVertically">
                    <div class="helpCard addBorderCurve">
                        <center>
                            <p>Project ISBN:</p>
                        </center>
                        <ul class="myFacts">
                            <li>Required</li>
                            <li>15 characters long</li>
                        </ul>
                    </div>
                    <div class="helpCard addBorderCurve">
                        <center>
                            <p>REG NO:</p>
                        </center>
                        <ul class="myFacts">
                            <li>Required</li>
                            <li>Must have numbers and text</li>
                        </ul>
                    </div>
                    <div class="helpCard addBorderCurve">
                        <center>
                            <p>DUE DATE:</p>
                        </center>
                        <ul class="myFacts">
                            <li>Default is 2 weeks</li>
                            <li>Maximum is 4 weeks</li>
                        </ul>
                    </div>
                </div>
                <div class="groupTabcontent">
                    <div id="add" class="formCard addBorderCurve arrangeHorizontal displayShadow add">
                        <form name="myAddForm" id="myAddForm" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="<?php echo $_POST; ?>">
                            <center><h3>ADD Project</h3><hr>
                            <table>
                                <tr>
                                    <td><label for="addISBN">Project ISBN</label></td>
                                    <td><input id="addISBN" name="addISBN" type="text" required><br></td>
                                </tr>
                                <tr>
                                    <td><label for="addCategory">Category</label></td>
                                    <td><input id="addCategory" name="addCategory" type="text"><br></td>
                                </tr>
                                <tr>
                                    <td><label for="addName">Name</label></td>
                                    <td><input id="addName" name="addName" type="text"><br></td>
                                </tr>
                                <tr>
                                    <td><label for="addAuthor">Author</label></td>
                                    <td><input id="addAuthor" name="addAuthor" type="text"><br></td>
                                </tr>
                                <tr>
                                    <td><label for="addPages">Pages</label></td>
                                    <td><input id="addPages" name="addPages" type="number"><br></td>
                                </tr>
                                <tr>
                                    <td colspan="2"><center><input type="submit"><input type="reset"></center></td>
                                </tr>
                            </table>
                            </center>
                        </form>
                    </div>
                    <div id="borrow" class="formCard addBorderCurve displayShadow borrow">
                        <form name="myBorrowForm" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="<?php echo $_POST; ?>">
                            <center><h3>BORROW Project</h3><hr>
                                <table>
                                    <tr>
                                        <td><label for="borrowISBN">Project ISBN</label></td>
                                        <td><input id="borrowISBN" name="borrowISBN" type="text" required><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="BorrowDate">BorrowDate</label></td>
                                        <td><input id="BorrowDate" name="BorrowDate" type="date"><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="borrowDueDate">DueDate</label></td>
                                        <td><input id="borrowDueDate" name="borrowDueDate" type="date"><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="borrowRegNo">RegNo</label></td>
                                        <td><input id="borrowRegNo" name="borrowRegNo" type="text"><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="borrowStudentName">StudentName</label></td>
                                        <td><input id="borrowStudentName" name="borrowStudentName" type="text"><br></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><center><input type="submit"><input type="reset"></center></td>
                                    </tr>
                                </table>
                            </center>
                        </form>
                    </div>
                    <div id="returnItem" class="formCard addBorderCurve displayShadow returnItem">
                        <form id="myReturnForm" name="myReturnForm" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="<?php echo $_POST; ?>">
                            <center><h3>RETURN Project</h3><hr>
                                <table>
                                    <tr>
                                        <td><label for="returnISBN">Project ISBN</label></td>
                                        <td><input id="returnISBN" name="returnISBN" type="text" required><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="BorrowDate">ReturnDate</label></td>
                                        <td><input id="BorrowDate" name="BorrowDate" type="date"><br></td>
                                    </tr>
                                    <tr>
                                        <td><label>Feedback</label></td>
                                        <td>
                                            <form name="returnContentFeedback" action="<? echo $_SERVER['PHP_SELF']; " method="<?php echo $_POST; ?>">
                                                <select>
                                                    <option name="returnProjectFeedback" type="date" value="1" selected>[Select an option]</option>
                                                    <option name="returnProjectFeedback" type="date" value="2" >No Relevant Content</option>
                                                    <option name="returnProjectFeedback" type="date" value="3" >Relevant Content</option>
                                                    <option name="returnProjectFeedback" type="date" value="4" >Missing Pages</option>
                                                </select>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label for="returnRegNo">RegNo</label></td>
                                        <td><input id="returnRegNo" name="returnRegNo" type="text"><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="returnConditionFeedback">ProjectCondition</label></td>
                                        <td>
                                            <form name="returnConditionFeedback" action="<? echo $_SERVER['PHP_SELF']; " method="<?php echo $_POST; ?>">
                                                <input id="returnProjectConditionGood" name="returnProjectConditionGood" type="radio" value="1"> Good<br>
                                                <input id="returnProjectConditionBad" name="returnProjectConditionBad" type="radio" value="2"> Bad<br>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><center><input type="submit"><input type="reset"></center></td>
                                    </tr>
                                </table>
                            </center>
                        </form>
                    </div>
                    <div id="edit" class="formCard addBorderCurve arrangeHorizontal displayShadow edit">
                        <form name="myEditForm" id="myEditForm" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="<?php echo $_POST; ?>">
                            <center><h3>EDIT Project</h3><hr>
                                <table>
                                    <tr>
                                        <td><label for="editISBN">Project ISBN</label></td>
                                        <td><input id="editISBN" name="editISBN" type="text" required><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="editCategory">Category</label></td>
                                        <td><input id="editCategory" name="editCategory" type="text"><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="editName">Name</label></td>
                                        <td><input id="editName" name="editName" type="text"><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="editAuthor">Author</label></td>
                                        <td><input id="editAuthor" name="editAuthor" type="text"><br></td>
                                    </tr>
                                    <tr>
                                        <td><label for="editPages">Pages</label></td>
                                        <td><input id="editPages" name="editPages" type="number"><br></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><center><input type="submit"><input type="reset"></center></td>
                                    </tr>
                                </table>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
            <div class="bottomSide">
                <center>
                    <p>Project MS 2021</p><span>&copy;</span>
                </center>
            </div>
        </div>
    </body>
    <script>
        function showTarget(){
            let hash = window.location.hash
            hash = hash.substring(1)
            document.getElementById(hash).style.display = "block"
        }

        availableLink.addEventListener("click", function(){
            window.location.href = "file:///home/silas/Desktop/Clones/financial-MS-/indexThree.html#available"
        })
        addLink.addEventListener("click", function(){
            document.getElementById("add").style.display = "block"
            document.getElementById("borrow").style.display = "none"
            document.getElementById("returnItem").style.display = "none"
            document.getElementById("edit").style.display = "none"
        })
        borrowLink.addEventListener("click", function(){
            document.getElementById("add").style.display = "none"
            document.getElementById("borrow").style.display = "block"
            document.getElementById("returnItem").style.display = "none"
            document.getElementById("edit").style.display = "none"
        })
        returnLink.addEventListener("click", function(){
            document.getElementById("add").style.display = "none"
            document.getElementById("borrow").style.display = "none"
            document.getElementById("returnItem").style.display = "block"
            document.getElementById("edit").style.display = "none"
        })
        overdueLink.addEventListener("click", function(){
            window.location.href = "file:///home/silas/Desktop/Clones/financial-MS-/indexThree.html#overdue"
        })
        editLink.addEventListener("click", function(){
            document.getElementById("add").style.display = "none"
            document.getElementById("borrow").style.display = "none"
            document.getElementById("returnItem").style.display = "none"
            document.getElementById("returnItem").style.display = "block"
        })
    </script>
    <script src="int.js"></script>
</html>
<?php
    $myItems = array();
    $myBorrowedItems = array();
    $myReturnedItems = array();
    $myEditedItems = array();
    $isIn = false;
    function addProject(){
        if(isset($_POST['add']){
            if(in_array($_POST['addISBN'], $myItems['ISBN'])){
                echo "<h2>".$_POST['addISBN']." ALREADY EXISTS"."</h2>";
                $isIn = true;
            } else {
                $newRow = array(
                    "ISBN" => $_POST['addISBN'],
                    "Name" => $_POST['addName'],
                    "Category" => $_POST['addCategory'],
                    "Author" => $_POST['addAuthor'],
                    "Pages" => $_POST['addPages']
                );
                array_push($myItems, $newRow);
                echo $myItems;
            }
        }
        return $isIn;
    }

    function borrowProject(){
        if(isset($_POST['borrow']){
            if(in_array($_POST['borrowISBN'], $myBorrowedItems['ISBN'])){
                $isIn = true;
                echo "<h2>".$_POST['borrowISBN']." ALREADY BORROWED"."</h2>";
            } else {
                $isIn = false;
                $newBorrow = array(
                     "ISBN" => $_POST['borrowISBN'],
                     "StudentName" => $_POST['borrowStudentName'],
                     "DueDate" => $_POST['borrowDueDate'],
                     "BorrowDate" => $_POST['BorrowDate'],
                     "RegNo" => $_POST['borrowRegNo']
                );
                array_push($myBorrowedItems, $newBorrow);
                echo $myBorrowedItems;
            }
        }
        return $isIn;
    }
    function returnItem(){
        if(isset($_POST['returnItem']){
            if(in_array($_POST['returnISBN'], $myBorrowedItems['ISBN'])){
                $isIn = true;
                $newReturn = array(
                     "ISBN" => $_POST['returnISBN'],
                     "BorrowDate" => $_POST['returnBorrowDate'],
                     "ContentFeedback" => $_POST['returnContentFeedback'],
                     "RegNo" => $_POST['returnRegNo'],
                     "ProjectCondition" => $_POST['returnConditionFeedback'],
                );
                array_push($myReturnedItems, $newReturn);
                echo $myReturnedItems;
            } else {
                $isIn = false;
                echo "<h2>".$_POST['returnISBN']." DOESN'T EXIST"."</h2>";
            }
        }
        return $isIn;
    }
    function editProject(){
        if(isset($_POST['edit']){
            if(in_array($_POST['editISBN'], $myItems)){
               $isIn = true;
               $newEdits = array(
                "ISBN" => $_POST['editISBN'],
                "Category" => $_POST['editCategory'],
                 "Name" => $_POST['editName'],
                "Author" => $_POST['editAuthor'],
                "Pages" => $_POST['editPages']
               );
               array_push($myEditedItems, $newEdits);
            }
        } else {
            $isIn = false;
            echo "<h2>".$_POST['editISBN']." DOESN'T EXIST"."</h2>";
        }
        return $isIn;
    }
?>
